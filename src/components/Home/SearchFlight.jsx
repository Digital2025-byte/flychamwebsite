import React, { useRef, useState } from "react";
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
    const [useMiles, setUseMiles] = useState(false);
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
        speed: 300,
        slidesToShow: 3, // Default for screens above 400px
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600, // For screens 400px and below
                settings: {
                    slidesToShow: 1.5,
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


    const MobileView = () => (
        <>
            <TabNavigation
                tabs={tabs}
                activeTab={activeTab}
                isMobile
            />
            <TripTypeSelector formik={formik} isMobile />
            <FromToSelector
                setShowModal={setDesktopShowModal}
                setShowMobileModal={setShowMobileModal}
                isMobile
            />
            <FlightInfoInputs />
            <SearchFlightsButton />
            <MilesToggle
                useMiles={useMiles}
                setUseMiles={setUseMiles}
                isMobile
            />



        </>
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
                <MilesToggle useMiles={useMiles} setUseMiles={setUseMiles} />
            </div>
            <FromToSelector
                setShowModal={setDesktopShowModal}
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
            />
        </div>
    );
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
                
            />
        </>

    );

};

export default BookingBox;
