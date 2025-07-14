'use client'
import React from 'react';
import { useSelector } from 'react-redux';

const AirportList = ({  search, type, formik, isMobile, sliderRef,  getCitiesArray }) => {
  const { airPorts } = useSelector(state => state.flights);

  const iataSourceCode = airPorts.items.find((item) => item.id === formik.values.source)?.iataCode
  const citiesArray = getCitiesArray(type, iataSourceCode, search);


  const handleAirportSelection = ({ search, formik, type, itemValue, id, isMobile, sliderRef }) => {

    // setCities(airPorts.items)
    formik.setFieldValue(type, id);

    switch (type) {
      case "source":
        formik.setFieldValue("destination", "");
        if (isMobile) {
          if (sliderRef?.current) sliderRef.current.slickGoTo(1);
        }
        formik.setFieldValue("type", 1);
        break;
      case "destination":
        if (isMobile) {
          if (sliderRef?.current) sliderRef.current.slickGoTo(2);
        }
        formik.setFieldValue("type", 2);
        break;
      default:
        break;
    }
  };


  return (
    <div className="">
      <p className="text-sm font-medium text-gray-600 mb-4">Matching Airports</p>

      <div
        className={`${!isMobile && 'max-h-[300px]'} overflow-y-auto pr-1`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="space-y-2">
          {citiesArray.map((item, i) => {
            const { id, iataCode, airPortTranslations } = item
            const { city, country, airPortName } = airPortTranslations[0]
            return (
              <div
                key={id}
                onClick={() =>
                  handleAirportSelection({
                    formik,
                    type,
                    itemValue: iataCode,
                    id: id,
                    isMobile, sliderRef
                  })
                }


                className={`flex items-center justify-between border-b border-gray-300 p-3 rounded-md transition-colors duration-150 hover:bg-[#F5F5F4] cursor-pointer ${formik.values[type] === iataCode ? 'bg-[#E5E5E3]' : ''
                  }`}
              >
                <div>
                  <p className="text-sm font-semibold text-gray-800">{airPortName}</p>
                  <p className="text-xs text-gray-500">{`${country} ${city}`}</p>
                </div>
                <div className="bg-main text-white text-xs px-3 py-1 rounded-md font-semibold">{iataCode}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  );
};

export default React.memo(AirportList);
