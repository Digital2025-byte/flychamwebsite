import React, { useState } from "react";
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

const BookingBox = () => {
    const [activeTab, setActiveTab] = useState("book");
    const [useMiles, setUseMiles] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [activeStep, setActiveStep] = useState("from");
    const tabs = ["book", "manage", "flight status"];
    const isMobile = useIsMobile()

    const formik = useFormik({
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
    console.log('formik values', formik.values);

    return (
        <>
            {isMobile ? (
                <>

                    <TabNavigation
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        isMobile={isMobile}
                    />
                    <TripTypeSelector formik={formik} isMobile={isMobile}
                    />
                    <FromToSelector
                        setActiveStep={setActiveStep}
                        setShowModal={setShowModal}
                        isMobile={isMobile}
                    />
                    <FlightInfoInputs />
                    <SearchFlightsButton />
                    <MilesToggle useMiles={useMiles} setUseMiles={setUseMiles} isMobile={isMobile} />

                </>
            ) : (
                <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-5xl mx-auto mt-10">
                    {/* Top Tabs */}
                    <TabNavigation
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        isMobile={isMobile}
                    />

                    {/* Trip Type and Toggle */}
                    <div className="flex items-center justify-between mb-6">
                        <TripTypeSelector formik={formik} />
                        <MilesToggle useMiles={useMiles} setUseMiles={setUseMiles} />
                    </div>

                    <FromToSelector
                        setActiveStep={setActiveStep}
                        setShowModal={setShowModal}
                    />

                    <AirportModal
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                        formik={formik}

                    />
                </div>
            )}
        </>
    );

};

export default BookingBox;
