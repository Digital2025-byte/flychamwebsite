import React, { useState } from 'react';

const TripTypeSelector = ({ formik }) => {
const selected = formik.values.tripType
  const handleSelect = (type) => {
    formik.setFieldValue("tripType",type)
  };

  return (
    <div className="relative w-full  md:w-[341px] h-[40px] bg-[#f5f5f4] rounded-[24px] flex items-center p-1 transition-all duration-300">
      {/* Moving background */}
      <div
        className={`absolute top-1 bottom-1 w-[50%] rounded-[20px] bg-main transition-all duration-300 ${selected === 'roundtrip' ? 'left-1' : 'left-[50%]'
          }`}
      />

      {/* Buttons */}
      <button
        onClick={() => handleSelect('roundtrip')}
        className={`relative z-10 w-1/2  rounded-[20px]  text-sm font-medium transition-colors duration-300 ${selected === 'roundtrip' ? 'text-white' : 'text-main'
          }`}
      >
        Round Trip
      </button>
      <button
        onClick={() => handleSelect('oneway')}
        className={`relative z-10 w-1/2  rounded-[20px]  text-sm font-medium transition-colors duration-300 ${selected === 'oneway' ? 'text-white' : 'text-main'
          }`}
      >
        One-way
      </button>
    </div>
  );
};

export default TripTypeSelector;
