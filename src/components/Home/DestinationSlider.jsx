'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import dubai from '@/assets/images/dest-slider/dubai.webp';
import d3 from '@/assets/images/dest-slider/d3.webp';
import d4 from '@/assets/images/dest-slider/d4.webp';
import { useRouter } from 'next/navigation';

const destinations = [
    {
        title: 'Flights to Sharjah',
        subtitle: 'Explore Destination',
        image: d4,
    },
    {
        title: 'Flights to UAE',
        subtitle: 'Explore Destination',
        image: dubai,
    },
    {
        title: 'Flights to Muscat',
        subtitle: 'Explore Destination',
        image: d3,
    },
];

const DestinationCards = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Make first active by default
    const router = useRouter()

    return (
        <>

            <div className="flex gap-4 overflow-hidden">
                {destinations.map((dest, index) => {
                    const isActive = activeIndex === index;

                    // Calculate flex values for each card
                    let flexClass = '';
                    if (isActive) {
                        flexClass = 'flex-[3]';
                    } else {
                        const otherIndexes = destinations
                            .map((_, i) => i)
                            .filter((i) => i !== activeIndex);
                        const nonActiveOrder = otherIndexes.indexOf(index);
                        flexClass = nonActiveOrder === 0 ? 'flex-[1.1]' : 'flex-[1.6]';
                    }

                    return (
                        <div
                            key={index}
                            onClick={() => {
                                isActive ? router.push('/destenations') : setActiveIndex(index)
                            }}
                            className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.45,1,0.4,1.1)]

 flex-shrink-0 ${flexClass}`}
                            style={{ height: '500px' }}
                        >
                            <Image
                                src={dest.image}
                                alt={dest.title}
                                fill
                                className={`object-cover`}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />

                            {/* Text Content (only show if active) */}
                            {isActive && (
                                <div className="absolute bottom-6 left-6 z-20 text-white transition-opacity duration-500 opacity-100">
                                    <h3 className="text-xl font-bold">{dest.title}</h3>
                                    <p className="text-sm text-white/80 mt-1 flex items-center gap-1">
                                        {dest.subtitle}
                                        <span className="text-base">→</span>
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default DestinationCards;
