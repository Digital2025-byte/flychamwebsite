'use client'

import React, { useState } from 'react';
import useIsMobile from '@/hooks/useIsMobile';

const steps = [
  { label: 'Select flight' },
  { label: 'Passenger details' },
  { label: 'Seats & Extras' },
  { label: 'Pay & confirm' },
];

const ProgressBar = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isLg = useIsMobile(1024);
  const completedPercentage = ((activeStep + 1) / steps.length) * 100;

  return (
    <div className="relative w-full h-[66px] overflow-hidden">
      {/* Grey background arrow */}
      <svg
        viewBox="0 0 1078 66"
        className="absolute w-full h-full"
        preserveAspectRatio="none"
      >
        <path d="M0 0H1048.16L1077.5 34L1048.16 66H0V0Z" fill="var(--bg-100)" />
      </svg>

      {/* Primary progress arrow */}
      <svg
        viewBox="0 0 1078 66"
        className="absolute top-0 left-0 h-full transition-all duration-300"
        style={{ width: `${completedPercentage}%` }}
        preserveAspectRatio="none"
      >
        <path d="M0 0H1048.16L1077.5 34L1048.16 66H0V0Z" fill="var(--primary-1)" />
      </svg>

      {/* Step markers */}
      <div className="relative z-10 flex justify-between items-center h-full px-4 md:px-10">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isCompleted = index <= activeStep;

          return (
            <div
              key={index}
              onClick={() => setActiveStep(index)}
              className="cursor-pointer flex items-center gap-2 min-w-[30px]"
            >
              <div
                className={`w-[26px] h-[26px] flex items-center justify-center rounded-full border ${isCompleted ? 'border-white text-white' : 'border-[#9F9F9C] text-[#9F9F9C]'} text-xs`}
              >
                {index + 1}
              </div>
              {isActive && isLg && (
          <span className="text-[10px] sm:text-xs md:text-sm font-medium text-white text-center leading-tight mt-1 max-w-[60px]">
  {step.label.split(' ').map((word, i) => (
    <React.Fragment key={i}>
      {word}
      <br />
    </React.Fragment>
  ))}
</span>

              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
