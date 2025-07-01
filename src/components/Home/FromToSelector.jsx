import React from 'react';
import { AirplaneTakeoff, AirplaneLanding } from '@phosphor-icons/react';
import SwapIcon from './SwapIcon'; // Adjust path if needed

const FromToSelector = ({ setShowModal, setShowMobileModal, isMobile }) => {
    return (
        <div className={`relative flex  ${isMobile ? 'flex-col my-3 gap-3' : 'flex-row gap-7'}  items-center`}>
            {/* FROM */}
            <div
                onClick={() => {
                    if (isMobile) {
                        setShowMobileModal(true)
                    }
                    setShowModal(true);
                }}
                className="w-full flex-1 flex items-center space-x-4 bg-[#F5F5F4] hover:bg-[#E7E7E5] transition-colors duration-200 rounded-xl px-6 py-5 cursor-pointer"
            >
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <AirplaneTakeoff weight="fill" size={16} color="white" />
                </div>
                <div>
                    <p className="text-sm text-gray-500">From</p>
                    <p className="text-lg font-semibold text-[#1E1E1E]">DAM, Syria</p>
                    <p className="text-xs text-gray-500">Damascus International Airport</p>
                </div>
            </div>

            {/* SWAP ICON */}
            <div
                className="absolute left-1/2 top-1/2 z-10 cursor-pointer -translate-y-1/2"
                style={{
                    transform: `translateX(${isMobile ? '130px' : '-50%'}) `
                }}
            >
                <div className="w-12 h-12 rounded-full bg-white hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center">
                    <SwapIcon />
                </div>
            </div>



            {/* TO */}
            <div
                onClick={() => {
                    setShowModal(true);
                }}
                className="w-full flex-1 flex items-center space-x-4 bg-[#F5F5F4] hover:bg-[#E7E7E5] transition-colors duration-200 rounded-xl px-6 py-5 -ml-[12px] cursor-pointer"
            >
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <AirplaneLanding weight="fill" size={16} color="white" />
                </div>
                <div>
                    <p className="text-sm text-gray-500">To</p>
                    <p className="text-lg font-semibold text-[#1E1E1E]">To</p>
                    <p className="text-xs text-gray-500">Select your destination</p>
                </div>
            </div>
        </div>
    );
};

export default FromToSelector;
