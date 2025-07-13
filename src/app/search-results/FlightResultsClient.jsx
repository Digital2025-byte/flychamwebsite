'use client'
import React, { useState } from 'react'
import DateNavigation from '@/components/FlightResults/DateNavigation'
import FilterControls from '@/components/FlightResults/FilterControls'
import FlightCard from '@/components/FlightResults/FlighSelectStep/FlightCard'
import Header from '@/components/FlightResults/Header'
import ProgressBar from '@/components/FlightResults/ProgressBar'
import RouteInfo from '@/components/FlightResults/RouteInfo'
import SortFilterModal from '@/components/FlightResults/FlighSelectStep/SortFilterModal'
import { FunnelSimple, X } from '@phosphor-icons/react'
import HeaderMobile from '@/components/FlightResults/HeaderMobile'
import ProgressBarMb from '@/components/FlightResults/ProgressBarMb'
import Section from '@/components/FlightResults/Section'
import FlighSelectStep from '@/components/FlightResults/FlighSelectStep/FlighSelectStep'
import Divider from '@/components/FlightResults/FlighSelectStep/Divider'
import SearchResultsFooter from '@/components/FlightResults/SearchResultsFooter'
import PassengerDetails from '@/components/FlightResults/PassengerDetails/PassengerDetails'
import Payment from '@/components/FlightResults/PaymentStep/Payment'
import { AirplaneTilt, ArrowsClockwise, Briefcase, CheckCircle, EyeSlash, SuitcaseSimple, XCircle } from '@phosphor-icons/react';
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { setSelectedF, setSelectedPlan } from '@/store/flightSlice'
import { createPaymentService } from '@/store/Services/flightServices'

const FlightResultsClient = () => {
    const dispatch = useDispatch()
    const { flights, selectedPassengers, searchParams } = useSelector((state) => state.flights)

    const [isFilterModalOpen, setFilterModalOpen] = useState(false);
    const [isShowDetailsModalOpen, setFlightDetailsOpen] = useState(false);
    const [expandedFlight, setExpandedFlight] = useState(null);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [activeStep, setActiveStep] = useState(0);

    const handleDetailsClick = (flight) => {
        setExpandedFlight(flight);
        setFlightDetailsOpen(true);

    };


    const HeaderBarMobile = () => (
        <div className="px-3 flex items-center justify-between h-16 shadow-md bg-[#F1F1F1]">
            <HeaderMobile />
        </div>
    );

    const handleSelectPlan = (event, flight, col) => {
        event.stopPropagation(); // Prevent bubbling
        dispatch(setSelectedF(flight))
        dispatch(setSelectedPlan(col))

        setSelectedFlight(flight);
        setSelectedType(col);
    };
    const handlePayment = () => {
        console.log('selectedType', selectedType);
        console.log('sss', selectedType[selectedType.type]);
        console.log('selected selectedFlight', selectedFlight);
        const info = selectedType[selectedType.type]

        const data = {
            bookingInfo: {
                transactionId: info.transaction_id,
                travelers: selectedFlight.common_info.travelers,
                segments: selectedFlight.common_info.segments.map((s) => {
                    return {
                        originCode: s.origin_code,
                        destinationCode: s.destination_code,
                        departureDate: s.departure_date,
                        departureTime: s.departure_time,
                        arrivalDate: s.arrival_date,
                        arrivalTime: s.arrival_time,
                        rph: s.rph,
                        journeyDuration: s.journey_duration,
                        flightNumber: s.FlightNumber,
                    }
                }),
                flightClass: selectedType === "Economy" ? "Y" : "C",
                paymentAmount: info.total_fare_USD,
                posId: 7,
                flightType: "OneWay",
                ContactInfo: selectedPassengers

            },
            stripeInfo: {
                Amount: Number(info.total_fare_USD),
                Currency: "usd",
                Description: "DAM_KWI"
            }
        }
        console.log('data', data);

        dispatch(createPaymentService(data)).then((action) => {
            if (createPaymentService.fulfilled.match(action)) {
                const { checkoutUrl } = action.payload;

                if (checkoutUrl) {
                    window.open(checkoutUrl, '_blank'); // ✅ Opens in a new tab or window
                } else {
                    console.error("Checkout URL not found in payload");
                }
            }
        });

    }
    const steps = [
        {
            label: 'Select flight',
            content: <FlighSelectStep
                handleDetailsClick={handleDetailsClick}
                flights={flights}
                isFilterModalOpen={isFilterModalOpen}
                setFilterModalOpen={setFilterModalOpen}
                isShowDetailsModalOpen={isShowDetailsModalOpen}
                setFlightDetailsOpen={setFlightDetailsOpen}
                expandedFlight={expandedFlight}
                handleSelectPlan={handleSelectPlan}
                selectedFlight={selectedFlight}
                setActiveStep={setActiveStep}
                selectedType={selectedType}
                setSelectedFlight={setSelectedFlight}
            />
        },
        {
            label: 'Passenger details', content: <PassengerDetails

                setActiveStep={setActiveStep}
                selectedFlight={selectedFlight}
                selectedType={selectedType}
            />

        },
        // { label: 'Seats & Extras', content: <p>3</p> },
        {
            label: 'Pay & confirm', content: <Payment setActiveStep={setActiveStep}
                selectedFlight={selectedFlight}
                selectedType={selectedType}
                handlePayment={handlePayment}
            />
        },
    ];
    return (
        <>
            {/* Desktop View */}
            <div className="">
                <div className='hidden lg:block'>
                    <Header />
                    <main className="w-[70%] mx-auto px-2">
                        <Section><ProgressBar steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} /></Section>

                        <Section><RouteInfo
                        /></Section>

                    </main>
                </div>
                <div className="lg:hidden  w-full">
                    <HeaderBarMobile />
                    <Section><ProgressBar steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} /></Section>
                    {/* <main className="w-[95%] md:w-[70%] mx-auto px-2 py-4">

                        <ProgressBarMb />
                    </main> */}
                </div>

                <main className="w-[95%] md:w-[70%] mx-auto px-2">
                    <Section>
                        {steps[activeStep].content}
                    </Section>
                </main>

                {/* <SearchResultsFooter /> */}
            </div>

        </>

    );
};


export default FlightResultsClient
