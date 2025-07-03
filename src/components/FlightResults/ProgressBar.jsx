'use client'
import React, { useState } from 'react';

const steps = [
  { label: 'Select flight' },
  { label: 'Passenger details' },
  { label: 'Seats & Extras' },
  { label: 'Pay & confirm' },
];

const ProgressBar = () => {
  const [activeStep, setActiveStep] = useState(0);

  const completedPercentage = ((activeStep + 1) / steps.length) * 100;

  return (
    <div className="relative w-full h-[66px] overflow-hidden">
      {/* Full grey background arrow */}
      <svg
        viewBox="0 0 1078 66"
        className="absolute w-full h-full"
        preserveAspectRatio="none"
      >
        <path d="M0 0H1048.16L1077.5 34L1048.16 66H0V0Z" fill="#E5E5E3" />
      </svg>

      {/* Dynamic blue progress arrow */}
      <svg
        viewBox="0 0 1078 66"
        className="absolute top-0 left-0 h-full transition-all duration-300"
        style={{ width: `${completedPercentage}%` }}
        preserveAspectRatio="none"
      >
        <path d="M0 0H1048.16L1077.5 34L1048.16 66H0V0Z" fill="#054E72" />
      </svg>

      {/* Step Items */}
      <div className="relative z-10 flex justify-between items-center h-full px-4 md:px-10">
        {steps.map((step, index) => {
          const isCompleted = index <= activeStep;
          const stepColor = isCompleted ? 'text-white' : 'text-[#AFAFAC]';
          const borderColor = isCompleted ? 'border-white' : 'border-[#AFAFAC]';

          return (
            <div
              key={index}
              onClick={() => setActiveStep(index)}
              className="cursor-pointer flex items-center gap-2 min-w-[120px]"
            >
              <div
                className={`w-[26px] h-[26px] flex items-center justify-center rounded-full border ${borderColor} text-xs ${stepColor}`}
              >
                {index + 1}
              </div>
              <span className={`text-sm font-medium ${stepColor}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
