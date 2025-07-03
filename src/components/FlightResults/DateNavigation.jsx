import React from 'react';

const DateNavigation = () => {
  return (
    <section className="flex justify-between items-center w-full  max-md:flex-col max-md:gap-4">
      {/* Left Section */}
      <div className="flex flex-col items-start">
        <span className="text-[#282826] text-sm font-medium">Thu, 10 Jul 2025</span>
        <p className="text-[#6B6B6B] text-xs font-normal mt-1">
          Displayed fares apply to all passengers.
        </p>
      </div>

      {/* Right Section: Navigation */}
      <div className="flex items-center gap-8">
        {/* Previous */}
        <button className="flex items-center gap-5 text-sm text-[#282826] hover:underline">
          <svg
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="#282826"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Previous day
        </button>

        {/* Divider */}
        <span className="w-px h-4 bg-[#D4D4D2]"></span>

        {/* Next */}
        <button className="flex items-center gap-5 text-sm text-[#282826] hover:underline">
          Next day
          <svg
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M6 4L10 8L6 12"
              stroke="#282826"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default DateNavigation;
