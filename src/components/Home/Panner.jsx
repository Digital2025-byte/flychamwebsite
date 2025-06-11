'use client';

import React from 'react';
import bannerImage from '@/assets/images/panner.webp';

const Panner = () => {
  return (
    <div
      className="relative w-full max-w-[1560px] h-[260px] mx-auto rounded-[16px] bg-cover shadow-lg flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bannerImage.src})`,
        backgroundPositionY: '60%',
        backgroundPositionX: 'center',
      }}
    >
      {/* Black overlay with opacity */}
      <div className="absolute inset-0 bg-[##00000040] z-0 rounded-[16px]" />

      {/* Content */}
      <div className="pl-10 pr-4 z-10">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white mb-2 leading-tight">
          Make Unforgettable Memories
        </h2>
        <p className="text-sm sm:text-base font-medium text-white mb-4 max-w-xl leading-snug">
          With Holidays packages to the most beautiful destinations and tourist places
        </p>
        <button className="bg-[#1D5C88] text-white px-6 py-2 rounded-md w-fit hover:bg-[#164968] transition-all duration-200 text-sm font-semibold shadow-md">
          Discover more
        </button>
      </div>
    </div>
  );
};

export default Panner;
