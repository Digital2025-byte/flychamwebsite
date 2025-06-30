import React from 'react';

const TripTypeSelector = ({ formik, isMobile }) => {
    const tripType = formik.values.tripType
    const selectedIndex = tripType === 'roundtrip' ? 0 : 1;
    return (
        <div className={`flex w-full ${isMobile ? 'justify-center' : 'justify-start'}`}>
            <div className="relative w-fit bg-[#F5F5F4] p-1 rounded-[12px] flex overflow-hidden">
                {/* Sliding background */}
                <div
                    className="absolute top-1 left-1 h-[calc(100%-0.5rem)] w-1/2 bg-[#003A59] rounded-[10px] z-0 transition-all duration-400 ease-in-out"
                    style={{
                        transform: `translateX(${selectedIndex * 100}%)`
                    }}
                />

                {/* Buttons */}
                <button
                    onClick={() => formik.setFieldValue("tripType", "roundtrip")}
                    className={`cursor-pointer relative z-10 text-sm font-medium px-4 py-1.5 text-center rounded-[12px] transition-colors duration-400 whitespace-nowrap ${tripType === 'roundtrip' ? 'text-white' : 'text-[#003A59]'
                        }`}
                >
                    Round-trip
                </button>

                <button
                    onClick={() => formik.setFieldValue("tripType", "oneway")}
                    className={`cursor-pointer relative z-10 w-24 text-sm font-medium px-4 py-1.5 text-center rounded-[12px] transition-colors duration-400 ${tripType === 'oneway' ? 'text-white' : 'text-[#003A59]'
                        }`}
                >
                    One-way
                </button>
            </div>
        </div>
    );
};

export default TripTypeSelector;
