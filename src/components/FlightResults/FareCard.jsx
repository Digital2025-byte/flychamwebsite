'use client'
import React from 'react';

const FareCard = ({ type, price, special, isLg }) => {
    const isEconomy = type === 'Economy';
    const bgColor = isEconomy ? 'bg-[rgba(var(--primary-1-rgb),0.5)]' : 'bg-primary-1';
    const borderColor = isEconomy ? 'border-[rgba(var(--primary-1-rgb),0.5)]' : 'border-[var(--primary-1)]';
    const mobileTextColor = isEconomy ? 'text-primary-1' : 'text-white';
    const desktopTextColor = 'text-700';

    return (
        <div className={`border ${borderColor} rounded-xl overflow-hidden w-full lg:w-[175px] h-fit lg:h-[141px] flex flex-col`}>
            {/* Header */}
            <div className={`${bgColor} ${mobileTextColor} text-[12px] lg:text-sm font-normal lg:font-semibold text-start lg:text-center p-2 lg:p-1`}>
                {type}
            </div>

            {/* Body */}
            <div className={`${isLg ? bgColor : 'bg-white'} flex flex-row lg:flex-col gap-1 lg:gap-0 items-center justify-start lg:justify-center flex-1 text-center p-2 lg:p-1`}>
                {price ? (
                    <>
                        {/* Mobile */}
                        <div className="block lg:hidden">
                            <div className={`${mobileTextColor} text-[12px]`}>USD</div>
                            <div className={`${mobileTextColor} text-[16px]`}>{price.split('.')[0]}</div>
                        </div>

                        {/* Desktop */}
                        <div className="hidden lg:block">
                            <div className={`${desktopTextColor} text-[12px]`}>From USD</div>
                            <div className={`${isEconomy ? 'text-primary-1' : 'text-white'} ${desktopTextColor} text-[32px]`}>{price.split('.')[0]}</div>
                        </div>
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

export default FareCard;
