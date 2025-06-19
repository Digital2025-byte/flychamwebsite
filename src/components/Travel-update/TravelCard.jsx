'use client';

import React from 'react';
import { Info } from 'phosphor-react';
import Link from 'next/link';

const TravelCard = ({ update }) => {
    return (
        <div className="relative w-full rounded-lg border border-gray-200 shadow-md overflow-hidden">
            {/* Header */}
            <div className="flex">
                <div className="hidden md:block bg-[#003e59] w-2 md:w-6"></div>
                <div className="flex-1">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#f5ebd8] px-4 py-3">
                        <div className="flex items-center space-x-2">
                            <Info size={20} color="#054E72" />
                            <span className="text-sm font-medium text-main">
                                {update.label}
                            </span>
                        </div>
                        <div className="text-[13.96px] text-[#5F5F5C] font-normal word-break break-words">
                            {update.date}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex">
                        <div className="flex-1 px-6 py-4">
                            <h2
                                className="text-[27.93px] font-semibold text-[#5F5F5C] mb-2 word-break break-words"
                                style={{ lineHeight: '1.2' }}
                            >
                                {update.title}
                            </h2>

                            <p className="text-[13.96px] text-[#5F5F5C] font-normal leading-relaxed mb-4 word-break break-words">
                                {update.description}{' '}
                                <span className="font-semibold italic underline text-[#5F5F5C]">
                                    {update.linkText}
                                </span>{' '}
                                {update.moreText}
                            </p>

                            <Link href={`/travel-update/${update.slug}`}>
                                <button
                                    type="button"
                                    className="inline-flex px-[23.94px] py-[8px] bg-[#054E72] rounded-[5.98px] justify-center items-center gap-[9.97px] text-[#F5F5F4] text-[14px] font-bold cursor-pointer hover:bg-[#043d59] transition-colors"
                                >
                                    {update.buttonText}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelCard;
