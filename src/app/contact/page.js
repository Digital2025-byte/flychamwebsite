'use client';

import React from 'react';
import Image from 'next/image';
import pattern from '@/assets/images/contact/pattern.webp';
import { MdPhone, MdOutlineMailOutline } from 'react-icons/md';
import { TbClockHour3 } from 'react-icons/tb';

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-250 opacity-80 z-0 pointer-events-none" style={{transform: `rotate(-24deg)`,
    scale: `1.6`}}>
        <Image
          src={pattern}
          alt="Pattern"
          className="w-full object-contain"
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen">
        <h1 className="text-[42px] sm:text-[60px] md:text-[72px] lg:text-[92px] font-light text-black leading-none tracking-wide mb-6">
          Contact Us
        </h1>
        <p className="text-[16px] sm:text-[18px] text-black font-light leading-[22px] tracking-[0.04px] max-w-xl mb-10">
          Our team is ready to assist you every step of the way. Whether you're traveling with us, a business partner, or a member of the Cham Miles loyalty program, take advantage of the range of services available and don't hesitate to contact us for any assistance.
        </p>

        <div className="space-y-4">
          {/* Phone */}
          <div className="flex items-start gap-4 bg-white rounded-md px-5 py-4 shadow-md w-full max-w-md text-left">
            <MdPhone className="text-[#4C97D2] text-2xl mt-1" />
            <div>
              <div className="text-black text-lg">+963 4000</div>
              <div className="text-gray-500 text-sm">Call us for immediate Help</div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 bg-white rounded-md px-5 py-4 shadow-md w-full max-w-md text-left">
            <MdOutlineMailOutline className="text-[#C6A770] text-2xl mt-1" />
            <div>
              <div className="text-black text-lg">cs@flycham.com</div>
              <div className="text-gray-500 text-sm">Email us for Queries</div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4 bg-white rounded-md px-5 py-4 shadow-md w-full max-w-md text-left">
            <TbClockHour3 className="text-[#113752] text-2xl mt-1" />
            <div>
              <div className="text-black text-lg">
                Saturday to Thursday, 9:00 AM - Mid Night
              </div>
              <div className="text-gray-500 text-sm">Our Active Hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
