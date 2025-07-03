import React, { useEffect, useRef, useState } from "react";
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

const BookingBox = () => {
    const [activeTab, setActiveTab] = useState("book");
    const [showDesktopModal, setDesktopShowModal] = useState(false);
    const [showMobileModal, setShowMobileModal] = useState(false);
    const [search, setSearch] = useState("");
    const sliderRef = useRef(null);

    const cities = useCities();

    const formik = useFormik({
        enableReinitialize: false,
        initialValues: {
            source: '',
            destination: '',
            adults: 1,
            children: 0,
            infants: 0,
            promoCode: '',
            class: 'Economy',
            dateStart: '',
            dateEnd: '',
            type: 0,
            tripType: 'roundtrip'
        },
        onSubmit: (values) => {
            const {
                source,
                destination,
                dateStart,
                dateEnd,
                adults,
                children,
                infants, type
            } = values;
            if (!source || !destination) {
                console.error("❌ Missing required fields");
                alert("Please complete all required fields.");
                return;
            }

            // Format dates
            const formattedDeparture = formatDate(dateStart);
            const formattedReturn = type === 1 ? formatDate(dateEnd) : '';
            const flightType = type === 0 ? 'Y' : 'B'
            console.log('formattedDeparture', formattedDeparture);
            console.log('formattedReturn', formattedReturn);
            // https://reservations.chamwings.com/service-app/ibe/reservation.html#/fare/en/USD/SY/DAM/KWI/11-06-2025/12-06-2025/1/0/0/Y///
            // Build URL
            const searchUrl = `https://reservations.flycham.com/service-app/ibe/reservation.html#/fare/en/USD/SY/${source}/${destination}/${formattedDeparture}/${formattedReturn}/${adults}/${children}/${infants}/Y///`;
            console.log('searchUrl', searchUrl);

            // Open in new tab
            // window.open(searchUrl, '_blank');
        }



    });
    const tabs = ["book", "manage", "flight status"];
    const isMobile = useIsMobile()
    const getCityString = (val) => {
        const city = cities?.find(c => c.value === val);
        return city ? `${city.name}, ${city.value}` : '';
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

    const source = getCityString(formik.values.source);
    const destination = getCityString(formik.values.destination);
    const stepsData = [
        { icon: <AirplaneTakeoff size={20} />, title: "Flying from", value: source, id: 0 },
        { icon: <AirplaneLanding size={20} />, title: "Flying to", value: destination, id: 1 },
        { icon: <Users size={20} />, title: "Guests", value: getGuestSummary(), id: 2 },
        { icon: <CalendarBlank size={20} />, title: "Travel when", value: "Check Date", id: 3 },
    ];
    const normalizedSearch = search.toLowerCase();

    const isDAMorALP = ['DAM', 'ALP'].includes(formik.values.source);

    const cityMatches = ({ name, label }) =>
        `${name} ${label}`.toLowerCase().includes(normalizedSearch);

    const filteredDestenationCities = cities.filter(({ value, ...rest }) =>
        cityMatches(rest) &&
        (isDAMorALP ? !['DAM', 'ALP'].includes(value) : ['DAM', 'ALP'].includes(value))
    );




    const filteredSourceCities = cities.filter(cityMatches);
    const activeFlightTab = formik.values.type;

    console.log('formik values', formik.values);

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
    };
    const [minMonth, setMinMonth] = useState(new Date());

    const [currentMonth, setCurrentMonth] = useState(new Date());

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
    const onChange = (type) => {
        console.log('type', type);

        // formik.setFieldValue("tripType", type)
    };
    const [selected, setSelected] = useState('roundtrip');
    useEffect(() => {
        if (formik) {
            formik.setFieldValue('tripType', selected);
        }
    }, [selected]);
    const MobileView = () => (
        <div className="  w-full">
            <TabNavigation
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isMobile={false}
                formik={formik}
            />
            <TripTypeSelector selected={selected} setSelected={setSelected} formik={formik} isMobile={isMobile} onChange={onChange} />
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
                <TripTypeSelector selected={selected} setSelected={setSelected} formik={formik} isMobile={isMobile} onChange={onChange} />
                <MilesToggle isMobile={isMobile} />
            </div>
            <FromToSelector
                setShowModal={setDesktopShowModal}
                setShowMobileModal={setShowMobileModal}
                cities={cities}
                values={formik.values}
            />
            <AirportModal
                isOpen={showDesktopModal}
                onClose={() => setDesktopShowModal(false)}
                formik={formik}
                stepsData={stepsData}
                source={source}
                destination={destination}
                search={search}
                setSearch={setSearch}
                filteredSourceCities={filteredSourceCities}
                filteredDestenationCities={filteredDestenationCities}
                handleClick={handleClick}
                handleDateSelect={handleDateSelect}
                setCurrentMonth={setCurrentMonth}
                currentMonth={currentMonth}
                minMonth={minMonth}
                setMinMonth={setMinMonth}
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
                onClose={() => setShowMobileModal(false)}
                title="Departure"
                stepsData={stepsData}
                formik={formik}
                search={search}
                setSearch={setSearch}
                filteredSourceCities={filteredSourceCities}
                activeTab={activeFlightTab}
                cities={cities}
                isMobile
                handleClick={handleClick}
                filteredDestenationCities={filteredDestenationCities}
                sliderSettings={sliderSettings}
                sliderRef={sliderRef}
                handleReset={handleReset}
                handleDateSelect={handleDateSelect}
                setCurrentMonth={setCurrentMonth}
                currentMonth={currentMonth}
                minMonth={minMonth}
                setMinMonth={setMinMonth}
            />
        </>

    );

};

export default BookingBox;
