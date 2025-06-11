// app/destinations/page.js (or any route file)
'use client'

import Image from "next/image";
import CustomCalendar from "../Ui/CustomCalendar";
import tabImage from '@/assets/images/tabImage.webp'; // Adjust path if needed
import { useState } from "react";
import cities from "@/util/cities";
import useIsMobile from "@/hooks/useIsMobile";

const Destinations = ({ formik, setActiveTab }) => {
  const [search, setSearch] = useState('');
  const isMobile = useIsMobile()

  const filteredCities = cities.filter((city) =>
    `${city.name} ${city.label}`.toLowerCase().includes(search.toLowerCase())
  );

  const suggestions = [
    {
      city: 'Syria, Damascus',
      airport: 'Damascus International airport',
    },
    {
      city: 'Syria, Damascus',
      airport: 'Damascus International airport',
    },
    {
      city: 'Syria, Damascus',
      airport: 'Damascus International airport',
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      {/* Left Side */}
      <div className="space-y-4">
        <label htmlFor="origin" className="block text-xl font-semibold">
          Where are you Traveling To ?
        </label>
        <input
          type="text"
          placeholder="Enter airport or city"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-2 rounded-md px-4 py-2 transition focus:outline-none"
          style={{
            borderColor: 'var(--color-secondary-light)',
            '--tw-ring-color': 'var(--color-main)',
            '--tw-border-color': 'var(--color-main)',
          }}
        />


        {/* Suggestions */}
        {/* {search && ( */}
          <div className="space-y-3 max-h-60 overflow-y-auto pr-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <h2 className="text-lg font-medium">Matching Airports</h2>
            {filteredCities.length > 0 ? (
              filteredCities.filter((c)=>c.value !==formik.values.source).map((item, index) => (
                <div
                  key={index}

                  onClick={() => {

                    formik.setFieldValue("destination", item.value)
                    if (isMobile) {

                      setActiveTab(2)
                    }

                  }}
                  className={`border ${formik.values.destination === item.value ? 'border-secondary' : 'border-[#ccc]'}
                   ${formik.values.destination === item.value ? 'bg-secondary-light' : 'bg-white'}
                  rounded-md px-4 py-2 cursor-pointer hover:bg-secondary-light hover:border-secondary-light`}               >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className={`
                                           ${formik.values.destination === item.value ? 'text-black' : 'text-gray-700'}
                        text-sm 
                        `}>{item.label}</div>
                    </div>
                    <div
                      className={

                        ` ${formik.values.destination === item.value ? 'text-black' : 'text-gray-500'} text-sm font-medium`
                      }                    >{item.value}</div>
                  </div>
                </div>

              ))
            ) : (
              <div className="text-gray-500 italic">No matching results found.</div>
            )}
          </div>
        {/* )} */}


      </div>

      {/* Right Side */}
      <div className="w-full rounded-lg overflow-hidden">
        <Image
          src={tabImage}
          alt="Tab image"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Destinations;
