'use client';

import useIsMobile from '@/hooks/useIsMobile';
import React, { useState, useEffect } from 'react';

const guestTypes = [
  { id: 'adults', label: 'Adults', sub: '+12 Years Old' },
  { id: 'children', label: 'Children', sub: '2 - 11 years old' },
  { id: 'infants', label: 'Infants', sub: 'Under 2 years old' }
];

const Guests = ({ formik, setActiveTab }) => {
  const [travelClass, setTravelClass] = useState(formik.values.class || 'Economy');

const updateCount = (type, delta) => {
  const current = formik.values[type];
  let newValue = Math.max(0, current + delta);

  // Ensure adult >= infant rule
  if (type === 'infants') {
    const currentAdults = formik.values.adults;
    if (newValue > currentAdults) {
      formik.setFieldValue('adults', newValue); // increase adults to match infants
    }
  }

  formik.setFieldValue(type, newValue);
};


  useEffect(() => {
    formik.setFieldValue('class', travelClass);
  }, [travelClass]);

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-8 ">
      {/* Guest Selection */}
      <div className="flex-1">
        <h2 className="text-lg font-bold text-main mb-4">Guest's</h2>
        <div className="space-y-4">
          {guestTypes.map(({ id, label, sub }) => (
            <div key={id} className="flex justify-between items-center bg-[#f0e9d5] rounded-lg p-4">
              <div>
                <div className="text-main font-semibold">{label}</div>
                <div className="text-sm text-gray-600">{sub}</div>
              </div>
              <div className="flex items-center space-x-4 text-main font-bold">
                <button
                  className="cursor-pointer text-2xl px-2"
                  onClick={() => updateCount(id, -1)}
                >
                  −
                </button>
                <span>{formik.values[id]}</span>
                <button
                  className="cursor-pointer text-2xl px-2"
                  onClick={() => updateCount(id, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Class & Promo */}
      <div className="flex flex-col space-y-6">
        {/* Class */}
        <div>
          <h2 className="text-lg font-bold text-[#003e61] mb-2">Class</h2>
          <div className="space-y-2">
            {['Economy', 'Business'].map((option) => (
              <label
                key={option}
                className={`flex items-center justify-between border rounded-md px-4 py-2 cursor-pointer transition 
                ${travelClass === option
                    ? 'border-[#d4c08f] bg-[#fff7e8] text-[#d4c08f]'
                    : 'border-gray-300 text-gray-500'
                  }`}
              >
                <span className="font-medium text-main ">{option}</span>
                <input
                  type="radio"
                  name="class"
                  value={option}
                  checked={travelClass === option}
                  onChange={() => setTravelClass(option)}
                  className="form-radio text-[#d4c08f] accent-[#053A55] h-5 w-5"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Promo Coupon */}
        <div>
          <h2 className="text-lg font-bold text-main mb-2">Promo coupon</h2>
          <input
            type="text"
            name="promo"
            value={formik.values.promo}
            onChange={formik.handleChange}
            placeholder="Enter Coupon Here"
            className="rounded-md px-4 py-2 w-full focus:outline-none border"
            style={{
              borderColor: 'var(--color-secondary-light)',
              '--tw-ring-color': 'var(--color-main)',
              '--tw-border-color': 'var(--color-main)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Guests;
