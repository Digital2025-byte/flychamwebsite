'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import planepath from '@/assets/images/planepath.png';
import tabicon from '@/assets/images/tabicon.png';

// Components
const FlightTimeInfo = ({ departureTime, arrivalTime, departureCode, arrivalCode, duration, stops }) => (
    <div className="flex items-start gap-6">
        <div className="text-center">
            <time className="text-2xl text-[#282826]">{departureTime}</time>
            <div className="text-[#5F5F5C] text-base">{departureCode}</div>
        </div>

        <div className="pt-4">
            <Image src={planepath} alt="Flight Path" />
        </div>

        <div className="text-center">
            <time className="text-2xl text-[#282826]">{arrivalTime}</time>
            <div className="text-[#5F5F5C] text-base">{arrivalCode}</div>
        </div>


    </div>
);

const ExpandToggle = ({ expanded, onToggle }) => (
    <button
        onClick={onToggle}
        className="p-2 hover:bg-gray-200 rounded"
        aria-label={expanded ? 'Collapse' : 'Expand'}
    >
        <svg
            className={`w-6 h-6 transform ${expanded ? 'rotate-180' : 'rotate-90'} transition-transform`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M18.9693 8.46927L12 15.4396 5.03055 8.46927" fill="#054E72" />
        </svg>
    </button>
);

const FlightCodes = () => (
    <div className="flex items-center gap-4 my-1">
        {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-2">
                <Image src={tabicon} alt="Flight logo" width={24} height={24} className="w-6 h-6 object-contain" />
                <span className="text-sm font-medium text-black">XH700</span>
            </div>
        ))}
    </div>
);

const EconomyCard = ({ price }) => (
  <div className="border border-[#7BA0B4] rounded-xl overflow-hidden w-[175px] h-[141px] flex flex-col">
    <div className="bg-[#7BA0B4] text-white text-sm font-bold text-center py-2">
      Economy
    </div>
    {price ? (
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        <div className="text-xs text-[#5F5F5C]">From USD</div>
        <div className="text-[#3E3E3B] text-[32px] font-medium">{price}</div>
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        <div className="text-[#5F5F5C] text-base">Not available</div>
        <div className="text-[#054E72] text-xs mt-1">Special deal</div>
      </div>
    )}
  </div>
);

const BusinessCard = ({ price }) => (
  <div className="border border-[#054E72] rounded-xl overflow-hidden w-[175px] h-[141px] flex flex-col">
    <div className="bg-[#054E72] text-white text-sm font-bold text-center py-2">
      Business
    </div>
    <div className="flex flex-col items-center justify-center flex-1 text-center">
      <div className="text-xs text-[#5F5F5C]">From USD</div>
      <div className="text-[#3E3E3B] text-[32px] font-medium">{price || '—'}</div>
      <div className="text-[#B6A06C] text-xs mt-1">Special deal</div>
    </div>
  </div>
);


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
    onDetailsClick
}) => {
    const [expanded, setExpanded] = useState(isExpanded);

    return (
        <article className="w-full bg-stone-100 rounded-xl py-8 px-10 flex flex-col ">

            <div className="flex  justify-between  items-start">
               
                <div className='flex flex-col items-start gap-4'>
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
                        className="text-[#054E72] text-sm font-bold underline hover:text-[#043A56] w-fit"
                    >
                        Flight details
                    </button>
                </div>
                <div className="flex justify-between items-center flex-wrap gap-4">

                    <div className="flex gap-4 flex-wrap">
                        <EconomyCard price={economyPrice} />
                        <BusinessCard price={businessPrice} />
                    </div>
                </div>
                {/* <ExpandToggle expanded={expanded} onToggle={() => setExpanded(!expanded)} /> */}
            </div>

            <div className="w-full h-px bg-[#E5E5E3] my-6" />

            <FlightCodes />




        </article>
    );
};

export default FlightCard;
