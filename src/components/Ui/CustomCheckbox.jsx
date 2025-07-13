import React from 'react';

const CustomCheckbox = ({ checked, onChange, label }) => (
    <label className="flex items-start sm:start gap-3 cursor-pointer select-none">
        <div
            className={`flex-shrink-0 w-5 h-5 rounded-[4px] p-[2px] flex justify-center items-center 
      ${checked ? 'bg-[var(--primary-1)]' : 'bg-white border border-[#B0B0AE]'}`}
        >
            {checked && (
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            )}
        </div>
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="hidden"
        />
        <span className="text-sm text-[#1A1A1A] leading-relaxed">
            {label}
        </span>
    </label>
);

export default CustomCheckbox;
