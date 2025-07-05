import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import React from 'react';

const DateNavigation = () => {
  return (
    <section className="flex justify-between items-center w-full  max-md:flex-col max-md:gap-4">
      {/* Left Section */}
      <div className="flex flex-col items-start">
        <span className="text-[#000] text-sm font-medium">Thu, 10 Jul 2025</span>
        <p className="text-[#000] text-xs font-normal mt-1">
          Displayed fares apply to all passengers.
        </p>
      </div>

      {/* Right Section: Navigation */}
      <div className="flex items-center gap-8">
        {/* Previous */}
        <button className="cursor-pointer flex items-center gap-5 text-sm text-800 ">
          <CaretLeft size={24} color='var()' />


          Previous day
        </button>

        {/* Divider */}
        <span className="w-px h-4 bg-[var(--text-800)]"></span>

        {/* Next */}
        <button className=" cursor-pointer flex items-center gap-5 text-sm text-800 ">
          Next day
          <CaretRight size={24} color='var(text-800)' />


        </button>
      </div>
    </section>
  );
};

export default DateNavigation;
