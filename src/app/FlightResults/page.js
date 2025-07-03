'use client'
import React, { useState } from 'react'
import DateNavigation from '@/components/FlightResults/DateNavigation'
import FilterControls from '@/components/FlightResults/FilterControls'
import FlightCard from '@/components/FlightResults/FlightCard'
import Header from '@/components/FlightResults/Header'
import ProgressBar from '@/components/FlightResults/ProgressBar'
import RouteInfo from '@/components/FlightResults/RouteInfo'
import SortFilterModal from '@/components/FlightResults/SortFilterModal'
import FlightDetailsModal from '@/components/FlightResults/FlightDetailsModal' // you’ll need to create this

const FlightResults = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    const [selectedFlight, setSelectedFlight] = useState(null)

    const flights = [
        {
            departureTime: "22:15",
            arrivalTime: "02:30",
            departureCode: "DAM",
            arrivalCode: "DXB",
            duration: "4h 15m",
            stops: "1 Stop",
            businessPrice: 850,
            stop: true
        },
        {
            departureTime: "10:20",
            arrivalTime: "14:45",
            departureCode: "DAM",
            arrivalCode: "DXB",
            duration: "4h 25m",
            stops: "Direct",
            businessPrice: 790,
            stop: false
        },
    ]

    const handleDetailsClick = (flight) => {
        setSelectedFlight(flight)
        setShowDetails(true)
    }

    return (
        <>
            <Header />
            <div className="w-[70%] mx-auto px-2">
                <div className="my-4">
                    <ProgressBar />
                </div>
                <div className="my-4">
                    <RouteInfo />
                </div>
                <div className="my-4">
                    <DateNavigation />
                </div>

                <div className="flex justify-between items-center mb-6">
                    <span className="text-black text-sm font-normal">(3 Result)</span>
                    <FilterControls onOpenModal={() => setIsModalOpen(true)} />
                </div>

                <div className="grid gap-6">
                    {flights.map((flight, index) => (
                        <FlightCard
                            key={index}
                            departureTime={flight.departureTime}
                            arrivalTime={flight.arrivalTime}
                            departureCode={flight.departureCode}
                            arrivalCode={flight.arrivalCode}
                            duration={flight.duration}
                            stops={flight.stops}
                            businessPrice={flight.businessPrice}
                            onDetailsClick={() => handleDetailsClick(flight)}
                        />
                    ))}
                </div>
            </div>

            {/* Modals */}
            <SortFilterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onApply={() => { }} />
            <FlightDetailsModal isOpen={showDetails} onClose={() => setShowDetails(false)} flight={selectedFlight} />
        </>
    )
}

export default FlightResults
