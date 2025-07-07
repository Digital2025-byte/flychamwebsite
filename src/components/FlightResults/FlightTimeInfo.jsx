import Image from 'next/image';
import React from 'react'
import planepath from '@/assets/images/planepath.png';

const FlightTimeInfo = ({ departureTime, arrivalTime, departureCode, arrivalCode, duration, stops }) => (
    <div className="flex items-start gap-6">
        <div className="text-center">
            <time className="text-[24px] md:text-2xl text-800">{departureTime}</time>
            <div className="text-[12px] md:text-600 text-base">{departureCode}</div>
        </div>

        <div className="pt-4">
            <Image src={planepath} alt="Flight Path" />
        </div>

        <div className="text-center">
            <time className="text-[24px] md:text-2xl text-800">{arrivalTime}</time>
            <div className=" text-[12px] md:text-600 text-600 text-base">{arrivalCode}</div>
        </div>


    </div>
);
export default FlightTimeInfo