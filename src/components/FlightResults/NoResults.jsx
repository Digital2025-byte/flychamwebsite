'use client';
import React from 'react';
import { CaretLeft } from '@phosphor-icons/react';
import Image from 'next/image';
import nodataImg from '@/assets/images/nodata.png'; // Replace with magnifier vector if needed
import { useRouter } from 'next/navigation';

const NoResults = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
      {/* Icon/Image */}
      <div className="self-center mb-4">
        <Image src={nodataImg} alt="No data found" />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-2" style={{ color: '#3E3E3B', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word' }}>
        No flights found. Please modify your search.
      </h2>

      {/* Suggestions */}
      <ul className="flex flex-col items-start text-lg font-bold text-gray-800 space-y-2 mb-6">
        <li className="before:content-['•'] before:text-yellow-500 before:mr-2 before:text-3xl text-sm font-medium font-montserrat">
          Try different dates
        </li>
        <li className="before:content-['•'] before:text-yellow-500 before:mr-2 before:text-3xl text-sm font-medium font-montserrat">
          Check nearby airports
        </li>
        <li className="before:content-['•'] before:text-yellow-500 before:mr-2 before:text-3xl text-sm font-medium font-montserrat">
          Adjust your filters
        </li>
      </ul>

      {/* Background div */}
      <div className="w-full h-full bg-[#BAA981] rounded-full" style={{ width: '100%', height: '100%', background: '#BAA981', borderRadius: 9999 }} />

      {/* Button */}
      <button
        onClick={() => router.push("/")}
        className="cursor-pointer inline-flex items-center px-4 py-2 border border-[#003A59] text-[#003A59] rounded-md text-sm hover:bg-[#003A59] hover:text-white transition"
      >
        <CaretLeft size={16} className="mr-2" />
        Back to Home
      </button>
    </div>
  );
};

export default NoResults;
