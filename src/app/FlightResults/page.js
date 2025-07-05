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
import SearchFooter from '@/components/FlightResults/SearchFooter'

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
            stop: true,
            price: 550,
            special: true
        },
        {
            departureTime: "10:20",
            arrivalTime: "14:45",
            departureCode: "DAM",
            arrivalCode: "DXB",
            duration: "4h 25m",
            stops: "Direct",
            businessPrice: 790,
            stop: false,
            special: false

        },
    ]

    const handleDetailsClick = (flight) => {
        setSelectedFlight(flight)
        setShowDetails(true)
    }

    return (
        <div className='hidden lg:block'>
            <Header />
            <div className="w-[70%] mx-auto px-2">
                <div className="my-4">
                    <ProgressBar />
                </div>
                <div className="my-4">
                    <RouteInfo />
                </div>
                <div className="mt-8 mb-4">
                    <DateNavigation />
                </div>
                {/* Divider */}
                <div className="w-full my-4 h-px bg-[var(--bg-300)]" />

                <div className="flex justify-between items-center mb-6">
                    <span className="text-black text-sm font-medium">(3 Result)</span>
                    <FilterControls onOpenModal={() => setIsModalOpen(true)} />
                </div>

                <div className="grid gap-6 my-5 ">
                    {flights.map((flight, index) => (
                        <FlightCard
                            key={index}
                            departureTime={flight.departureTime}
                            arrivalTime={flight.arrivalTime}
                            departureCode={flight.departureCode}
                            arrivalCode={flight.arrivalCode}
                            duration={flight.duration}
                            stops={flight.stops}
                            preconomyPriceice={flight.price}
                            businessPrice={flight.businessPrice}
                            economyPrice={flight.price}
                            special={flight.special}
                            onDetailsClick={() => handleDetailsClick(flight)}
                        />
                    ))}
                </div>
            </div>
            <SearchFooter />
            {/* Modals */}
            <SortFilterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onApply={() => { }} />
            <FlightDetailsModal isOpen={showDetails} onClose={() => setShowDetails(false)} flight={selectedFlight} />
        </div>
    )
}

export default FlightResults
