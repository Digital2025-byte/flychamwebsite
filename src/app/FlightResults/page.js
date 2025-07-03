import DateNavigation from '@/components/FlightResults/DateNavigation'
import FilterControls from '@/components/FlightResults/FilterControls'
import FlightCard from '@/components/FlightResults/FlightCard'
import Header from '@/components/FlightResults/Header'
import ProgressBar from '@/components/FlightResults/ProgressBar'
import RouteInfo from '@/components/FlightResults/RouteInfo'
import React from 'react'

const FlightResults = () => {
    return (
        <>
            <Header />
            <div className='w-[70%] mx-auto px-2'>
                <div className='my-4'>

                    <ProgressBar />
                </div>
                <div className='my-4'>

                    <RouteInfo />
                </div>
                <div className='my-4'>

                    <DateNavigation />
                </div>


                <div className="  flex justify-between items-center mb-6 ">
                    <span className="text-black text-sm font-normal">(3 Result)</span>
                    <FilterControls />
                </div>
                <FlightCard
                    departureTime="22:15"
                    arrivalTime="02:30"
                    departureCode="DAM"
                    arrivalCode="DXB"
                    duration="4h 15m"
                    stops="Direct"
                    businessPrice={850}
                />
            </div>
        </>
    )
}

export default FlightResults