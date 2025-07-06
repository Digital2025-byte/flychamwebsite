'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import planepath from '@/assets/images/planepath.png';
import tabicon from '@/assets/images/tabicon.png';
import useIsMobile from '@/hooks/useIsMobile';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import FlightDetails from './FlightDetails';
import { motion, AnimatePresence } from 'framer-motion';


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

const FareCard = ({ type, price, special,isLg }) => {
    const isEconomy = type === 'Economy';

    const bgColor = isEconomy
        ? 'bg-[rgba(var(--primary-1-rgb),0.5)]'
        : 'bg-primary-1';

    const borderColor = isEconomy
        ? 'border-[rgba(var(--primary-1-rgb),0.5)]'
        : 'border-[var(--primary-1)]';

    return (
        <div className={`border ${borderColor} rounded-xl overflow-hidden   md:w-[175px] w-full h-[141px] flex flex-col`}>
            <div className={`${bgColor} ${isEconomy ? 'text-primary-1' : 'text-white'}   text-sm font-bold text-center py-2`}>
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
  const isLg = useIsMobile(1078);
    const [expanded, setExpanded] = useState(isExpanded);

    return (
        <article onClick={() => setExpanded((prev) => !prev)} className=" cursor-pointer w-full bg-100 rounded-xl py-4 lg:py-8 p-0 lg:px-8 flex flex-col items-center lg:items-stretch">

            <div className={`flex   gap-0 ${isLg ? 'flex-col' : 'flex-row '}   md:gap-3  justify-between  items-start lg:items-center`}>

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
                <div className="w-full flex justify-between items-center flex-wrap gap-4 my-2 md:my-0">

                    <div className="w-full flex flex-row gap-4 items-center self-center justify-center xl:justify-end">
                        <FareCard type="Economy" price={economyPrice} special={special} isLg={isLg}/>
                        <FareCard type="Business" price={businessPrice} special={special} isLg={isLg}/>

                        <div className="hidden xl:block cursor-pointer" >
                            <AnimatePresence mode="wait" initial={false}>
                                {expanded ? (
                                    <motion.span
                                        key="up"
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <CaretUp size={28} className="text-primary-1" />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="down"
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <CaretDown size={28} className="text-primary-1" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-[#E5E5E3] my-4 lg:my-6" />

            <FlightCodes />
            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        key="flight-details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden w-full "
                    >
                        <FlightDetails />
                    </motion.div>
                )}
            </AnimatePresence>





        </article>
    );
};

export default FlightCard;
