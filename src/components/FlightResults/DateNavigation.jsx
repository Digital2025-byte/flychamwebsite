'use client'
import useFlightRouteDetails from '@/hooks/useFlightRouteDetails';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const DateNavigation = ({ isEditFlight, handleClickDate }) => {
  const router = useRouter();
  const { date, dateReturn, flighttype } = useFlightRouteDetails()

  return (
    <section className="flex justify-between items-start lg:items-center w-full  max-md:flex-col max-md:gap-4">
      {/* Left Section */}
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-x-2">
          <span className="text-[#000] text-sm font-medium">{date}</span>
          {flighttype === "Return" && (
            <span className="text-[#000] text-sm font-medium">{`- ${dateReturn}`}</span>
          )}
        </div>

        <p className="text-[#000] text-xs font-normal mt-1">
          Displayed fares apply to all passengers.
        </p>
      </div>

      {/* Right Section: Navigation */}
      {isEditFlight ?
        <div onClick={() => router.back()}
          className="cursor-pointer flex self-center items-center gap-2 ">
          <span className='text-700 underline'>Edit Flight</span>
          <CaretRight size={20} className='text-700' />
        </div>
        :
        <div className="flex self-center items-center gap-8">
          {/* Previous */}
          <button
            onClick={() => handleClickDate('prev')}
            className="cursor-pointer flex items-center gap-5 text-sm text-800 ">
            <CaretLeft size={24} className='text-800' />


            Previous day
          </button>

          {/* Divider */}
          <span className="w-px h-4 bg-[var(--text-800)]"></span>

          {/* Next */}
          <button
            onClick={() => handleClickDate('next')}

            className=" cursor-pointer flex items-center gap-5 text-sm text-800 ">
            Next day
            <CaretRight size={24} className='text-800' />


          </button>
        </div>
      }

    </section>
  );
};

export default DateNavigation;
