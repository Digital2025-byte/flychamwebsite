'use client'
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    AirplaneTakeoff,
    AirplaneLanding,
    ArrowsLeftRight
} from "@phosphor-icons/react";
import SwapIcon from "./SwapIcon";
import AirportModal from "./AirportModal";
import TripTypeSelector from "./TripTypeSelector";
import FromToSelector from "./FromToSelector";
import MilesToggle from "./MilesToggle";
import TabNavigation from "./TabNavigation";
import useIsMobile from "@/hooks/useIsMobile";
import FlightInfoInputs from "./FlightInfoInputs";
import SearchFlightsButton from "./SearchFlightsButton";
import { useFormik } from "formik";
import MobModal from "./Modals/MobModal";
import { Users, Calendar, X, Check, CalendarBlank } from "@phosphor-icons/react";
import useCities from "@/hooks/useCities";
import { useDispatch, useSelector } from "react-redux";
import { getFlightsService } from "@/store/Services/flightServices";
import { useRouter } from "next/navigation";
import { setSearchParams } from "@/store/flightSlice";
import AirportList from "./AirportList";
import Guests from "./Guests";
import Dates from "./widget/Dates/Dates";
import SearchInput from "./SearchInput";

const BookingBox = ({flights, cities, setCities, getCitiesArray, airPorts, search, setSearch }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [activeTab, setActiveTab] = useState("book");
    const [showDesktopModal, setDesktopShowModal] = useState(false);
    const [showMobileModal, setShowMobileModal] = useState(false);
    const [minMonth, setMinMonth] = useState(new Date());
    const [selected, setSelected] = useState('roundtrip');
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const sliderRef = useRef(null);

    const formatDate = (date) => {
        if (!(date instanceof Date)) return null;

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}T00:00:00`;
    };
    const formik = useFormik({
        enableReinitialize: false,
        initialValues: {
            source: '',
            destination: '',
            adults: 1,
            children: 0,
            infants: 0,
            promoCode: '',
            cabinClass: 'Economy',
            dateStart: '',
            dateEnd: '',
            type: 0,
            tripType: 'roundTrip',
            neirby: false
        },
        onSubmit: (values) => {
            const {
                cabinClass,
                source,
                destination,
                dateStart,
                dateEnd,
                adults,
                children, infants, type, neirby, tripType

            } = values;
            const formattedDeparture = formatDate(dateStart);
            const formattedReturn = formatDate(dateEnd);
            const flightclass = cabinClass === 'Economy' ? 'Y' : 'C'
            const data = {
                origin_id: source,
                destination_id: destination
                ,
                date: formattedDeparture,
                date_return: formattedReturn,
                adults: adults,
                children: children,
                infants: infants,
                flightclass: flightclass,
                flighttype: tripType,
                pos_id: 7,
                neirby
            }
            console.log('data', data);
            dispatch(getFlightsService(data)).then((action) => {
                if (getFlightsService.fulfilled.match(action)) {
                    router.push('/search-results')
                    dispatch(setSearchParams(data))
                }
            })
        }



    });


    console.log('formik', formik.values);

    const tabs = ["book", "manage", "flight status"];
    const isMobile = useIsMobile()

    const getCityString = (val, type) => {
        const city = airPorts?.items?.find(c => c.id === val);
        // return city ? `${city.airPortTranslations[0].country}, ${city.airPortTranslations[0].city}` : '';
        const text = type === 's' ? 'Departure: ' : "Destenation: "
        return city ? `${text}${city.iataCode}` : '';
    };

    const getGuestSummary = () => {
        const { adults, children, infants } = formik.values;

        const parts = [];
        if (adults !== 1 || children !== 0 || infants !== 0) {
            if (adults > 0) parts.push(`${adults}ADT`);
            if (children > 0) parts.push(`${children}CHD`);
            if (infants > 0) parts.push(`${infants}INF`);
            return parts.join(', ');
        }

        return 'Add Guest';
    };

    const source = getCityString(formik.values.source, 's');
    const destination = getCityString(formik.values.destination, 'd');
    const stepsData = [
        { icon: <AirplaneTakeoff size={20} />, title: "Flying from", value: source, id: 0 },
        { icon: <AirplaneLanding size={20} />, title: "Flying to", value: destination, id: 1 },
        { icon: <Users size={20} />, title: "Guests", value: getGuestSummary(), id: 2 },
        { icon: <CalendarBlank size={20} />, title: "Travel when", value: "Check Date", id: 3 },
    ];

    //     const normalizedSearch = search.toLowerCase();

    //     const isDAMorALP = ['DAM', 'ALP'].includes(formik.values.source);

    //     const cityMatches = ({ city, country,airPortName }) =>
    //         `${name} ${label}`.toLowerCase().includes(normalizedSearch);

    //     const filteredDestenationCities = airPorts?.items?.filter(({ value, ...rest }) =>
    //         cityMatches(rest) &&
    //         (isDAMorALP ? !['DAM', 'ALP'].includes(value) : ['DAM', 'ALP'].includes(value))
    //     );


    // console.log('filteredDestenationCities',filteredDestenationCities);


    // const filteredSourceCities = airPorts?.items?.filter(cityMatches);
    const activeFlightTab = formik.values.type;




    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 1000, // 1 second
        slidesToShow: 2, centerPadding: "20px", // or "10%"

        slidesToScroll: 1, cssEase: 'ease-in-out',

        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2.5,
                },
            },
        ],
    };

    const isStepValid = (stepId) => {
        const { source, destination, adults, children, infants, dateStart } = formik.values;

        switch (stepId) {
            case 0: // Going to "Flying to"
                return !!source;
            case 1: // Going to "Guests"
                return !!source && !!destination;
            case 2: // Going to "Travel when"
                return !!source && !!destination && (adults > 0 || children > 0 || infants > 0);
            default:
                return true;
        }
    };
    const handleClick = (id) => {
        const currentStep = formik.values.type;

        if (id > currentStep && !isStepValid(currentStep)) {
            return;
        }

        formik.setFieldValue("type", id);

        // Move the slider
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(id);
        }
    };
    const handleReset = () => {
        formik.setFieldValue("dateStart", null);
        formik.setFieldValue("dateEnd", null);
        setMinMonth(new Date())
    };

    const handleDateSelect = (value) => {
        const tripType = formik.values.tripType;

        if (tripType === 'oneway') {
            if (value instanceof Date) {
                formik.setFieldValue('dateStart', value);
                formik.setFieldValue('dateEnd', '');

                const selectedMonth = new Date(value.getFullYear(), value.getMonth(), 1);
                setCurrentMonth(selectedMonth);
                // ❌ DO NOT setMinMonth — you want to still allow past months
            }
        } else {
            if (value?.from) {
                formik.setFieldValue('dateStart', value.from);
                formik.setFieldValue('dateEnd', value.to || '');

                const target = value.to || value.from;
                const selectedMonth = new Date(target.getFullYear(), target.getMonth(), 1);
                setCurrentMonth(selectedMonth);
                setMinMonth(selectedMonth); // ✅ Now prevent viewing older months
            }
        }
    };
    const handleOneWayDateSelect = (date) => {
        const existing = formik.values.dateStart
            ? new Date(formik.values.dateStart).toDateString()
            : null;

        const selected = date ? new Date(date).toDateString() : null;

        // If date is the same, skip update
        if (existing === selected) return;

        formik.setFieldValue("dateStart", date);
    };



    // const getCitiesArray = (type, iataSourceCode, search = "") => {
    //     const normalizedSearch = search.toLowerCase();

    //     const filtered = cities?.filter((c) => {
    //         const { airPortTranslations, iataCode } = c;
    //         const { airPortName, city, country } = airPortTranslations?.[0] || {};
    //         const matchesSearch = (
    //             airPortName?.toLowerCase().includes(normalizedSearch) ||
    //             city?.toLowerCase().includes(normalizedSearch) ||
    //             country?.toLowerCase().includes(normalizedSearch) ||
    //             iataCode?.toLowerCase().includes(normalizedSearch)
    //         );

    //         if (!matchesSearch) return false;

    //         if (type === "source") {
    //             return true; // all match
    //         }

    //         // Destination logic
    //         if (iataSourceCode === "DAM" || iataSourceCode === "ALP") {
    //             return iataCode !== "DAM" && iataCode !== "ALP";
    //         } else {
    //             return iataCode === "DAM" || iataCode === "ALP";
    //         }
    //     });

    //     return filtered || [];
    // };




    const onClose = () => {
        if (isMobile) {
            setShowMobileModal(false)
        } else {
            setDesktopShowModal(false)
        }
    }
    const handleSearch = useCallback((searchValue) => {
        setSearch(searchValue);
        const normalizedSearch = searchValue.toLowerCase();

        if (!normalizedSearch) {
            setCities(airPorts.items);
            return;
        }

        const filtered = cities?.filter((c) => {
            const { airPortTranslations } = c;
            const { airPortName = "", country, city } = airPortTranslations?.[0] || {};

            return airPortName.toLowerCase().includes(normalizedSearch);
        });

        setCities(filtered || []);
    }, [airPorts.items, cities, setCities]);



    const renderStepComponent = () => {
        switch (formik.values.type) {
            case 0:
                return (
                    <>
                        <SearchInput search={search} handleSearch={handleSearch}
                            onClose={onClose} placeholder="Search for airport or city" type="source"
                        />
                        <AirportList
                            type="source"
                            values={formik.values}
                            setFieldValue={formik.setFieldValue}
                            getCitiesArray={getCitiesArray}
                            isMobile={isMobile}
                            sliderRef={sliderRef}
                        />

                    </>

                );
            case 1:
                return (
                    <>
                        <SearchInput handleSearch={handleSearch}

                            onClose={onClose} placeholder="To" type="destination"
                        />
                        <AirportList
                            type="destination"
                            values={formik.values}
                            setFieldValue={formik.setFieldValue}
                            getCitiesArray={getCitiesArray}
                            isMobile={isMobile}
                            sliderRef={sliderRef}
                        />                    </>
                );
            case 2:
                return (<Guests formik={formik} />)


            case 3:
                return (
                    <Dates formik={formik}
                        minMonth={minMonth}
                        setMinMonth={setMinMonth}
                        setCurrentMonth={setCurrentMonth}
                        currentMonth={currentMonth}
                        handleDateSelect={handleDateSelect}
                        handleOneWayDateSelect={handleOneWayDateSelect}
                    />
                )

            default:
                return null;
        }
    };


    const MobileView = () => (
        <div className="  w-full">
            <TabNavigation
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isMobile={false}
                formik={formik}
            />
            <TripTypeSelector defaultValue={selected} setSelected={setSelected} formik={formik} isMobile={isMobile} />
            <FromToSelector
                setShowModal={setDesktopShowModal}
                setShowMobileModal={setShowMobileModal}
                cities={cities}
                isMobile
                values={formik.values}
            />
            <FlightInfoInputs formik={formik} setShowMobileModal={setShowMobileModal}
            />
            <SearchFlightsButton />
            <MilesToggle
                isMobile={isMobile}
            />



        </div>
    );
    const DesktopView = () => (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-5xl mx-auto mt-10">
            <TabNavigation
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isMobile={false}
                formik={formik}
            />
            <div className="flex items-center justify-between mb-6">
                <TripTypeSelector formik={formik} />
                <MilesToggle isMobile={isMobile} />
            </div>
            <FromToSelector
                setShowModal={setDesktopShowModal}
                setShowMobileModal={setShowMobileModal}
                cities={cities}
                values={formik.values}
            />
            <AirportModal
                key={showMobileModal ? 'open' : 'closed'}

                isOpen={showDesktopModal}
                onClose={onClose}
                formikValues={formik.values}
                setFieldValue={formik.setFieldValue}
                handleSubmit={formik.handleSubmit}
                stepsData={stepsData}
                handleClick={handleClick}
                renderStepComponent={renderStepComponent}
            />
        </div>
    );

    useEffect(() => {
        if (showDesktopModal) {
            setShowMobileModal(false);
        }
    }, [showDesktopModal]);

    useEffect(() => {
        if (showMobileModal) {
            setDesktopShowModal(false);
        }
    }, [showMobileModal]);



    return (
        <>
            {isMobile ? <MobileView /> : <DesktopView />}
            <MobModal
                key={showMobileModal ? 'open' : 'closed'}
                isOpen={showMobileModal}
                onClose={onClose}
                title="Departure"
                stepsData={stepsData}
                formik={formik}
                activeTab={activeFlightTab}
                handleClick={handleClick}
                sliderSettings={sliderSettings}
                sliderRef={sliderRef}
                handleReset={handleReset}
                renderStepComponent={renderStepComponent}

            />
        </>

    );

};

export default React.memo(BookingBox);
