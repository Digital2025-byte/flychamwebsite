'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import planepath from '@/assets/images/planepath.png';
import tabicon from '@/assets/images/tabicon.png';
import useIsMobile from '@/hooks/useIsMobile';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import FlightDetails from './FlightDetails';

// Components
const FlightTimeInfo = ({ departureTime, arrivalTime, departureCode, arrivalCode, duration, stops }) => (
    <div className="flex items-start gap-6">
        <div className="text-center">
            <time className="text-2xl text-800">{departureTime}</time>
            <div className="text-600 text-base">{departureCode}</div>
        </div>

        <div className="pt-4">
            <Image src={planepath} alt="Flight Path" />
        </div>

        <div className="text-center">
            <time className="text-2xl text-800">{arrivalTime}</time>
            <div className="text-600 text-base">{arrivalCode}</div>
        </div>


    </div>
);



const FlightCodes = () => (
    <div className="flex items-center gap-4 my-1">
        {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-2">
                <Image src={tabicon} alt="Flight logo" width={24} height={24} className="w-6 h-6 object-contain" />
                <span className="text-sm  text-black">XH700</span>
            </div>
        ))}
    </div>
);

const FareCard = ({ type, price, special }) => {
    const isEconomy = type === 'Economy';

    const bgColor = isEconomy
        ? 'bg-[rgba(var(--primary-1-rgb),0.5)]'
        : 'bg-primary-1';

    const borderColor = isEconomy
        ? 'border-[rgba(var(--primary-1-rgb),0.5)]'
        : 'border-[var(--primary-1)]';

    return (
        <div className={`border ${borderColor} rounded-xl overflow-hidden w-[175px] h-[141px] flex flex-col`}>
            <div className={`${bgColor} ${isEconomy ? 'text-primary-1' : 'text-white'}  text-sm font-bold text-center py-2`}>
                {type}
            </div>

            <div className="flex flex-col items-center justify-center flex-1 text-center">
                {price ? (
                    <>
                        <div className="text-[12px] text-700">From USD</div>
                        <div className="text-700 text-[32px]">{price}</div>
                    </>
                ) : (
                    <>
                        <div className="text-[#5F5F5C] text-base">Not available</div>
                        {special && <div className="text-[#8E6B17] text-xs mt-1">Special deal</div>}
                    </>
                )}
            </div>
        </div>
    );
};


// Main Card
const FlightCard = ({
    departureTime,
    arrivalTime,
    departureCode,
    arrivalCode,
    duration,
    stops,
    economyPrice,
    businessPrice,
    isExpanded = false,
    onDetailsClick, special
}) => {
    console.log('economyPrice', economyPrice);
    const isTabScrenn = useIsMobile(1310)
    const [expanded, setExpanded] = useState(isExpanded);

    return (
        <article className="w-full bg-100 rounded-xl py-8 px-10 flex flex-col ">

            <div className={`flex   gap-0 ${isTabScrenn ? 'flex-col' : 'flex-row '}  md:gap-3  justify-between  items-start md:items-center`}>

                <div className='flex flex-col items-start gap-4 '>
                    <div className="text-[#B00300] text-sm pt-2 self-center">
                        {stops}, {duration}
                    </div>
                    <FlightTimeInfo
                        departureTime={departureTime}
                        arrivalTime={arrivalTime}
                        departureCode={departureCode}
                        arrivalCode={arrivalCode}
                        duration={duration}
                        stops={stops}
                    />
                    <button
                        onClick={onDetailsClick}
                        className="cursor-pointer text-primary-1 text-sm font-bold underline  w-fit"
                    >
                        Flight details
                    </button>
                </div>
                <div className="flex justify-between items-center flex-wrap gap-4">

                    <div className="flex gap-4 flex-wrap">
                        <FareCard type="Economy" price={economyPrice} special={special} />
                        <FareCard type="Business" price={businessPrice} special={special} />
                        <div className='cursor-pointer' onClick={() => setExpanded((prev) => !prev)}>

                            {expanded ? <CaretUp size={28} className='text-primary-1' /> : <CaretDown size={28} className='text-primary-1' />
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-[#E5E5E3] my-6" />

            <FlightCodes />
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className={`${expanded ? 'block' : 'invisible'}`}>
                    <FlightDetails />
                </div>
            </div>




        </article>
    );
};

export default FlightCard;
