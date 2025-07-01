import React from 'react';

const AirportList = ({ cities, type, formik, isMobile, sliderRef }) => {

  const handleAirportSelection = ({ formik, type, itemValue, isMobile, sliderRef }) => {
    formik.setFieldValue(type, itemValue);

    switch (type) {
      case "source":
        formik.setFieldValue("destination", "");
        if (isMobile) {
          formik.setFieldValue("type", 1);
          if (sliderRef?.current) sliderRef.current.slickGoTo(1);
        }
        break;
      case "destination":
        if (isMobile) {
          formik.setFieldValue("type", 2);
          if (sliderRef?.current) sliderRef.current.slickGoTo(2);
        }
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
          {cities.map((item, i) => (
            <div
              key={i}
              onClick={() =>
                handleAirportSelection({
                  formik,
                  type,
                  itemValue: item.value,
                  isMobile, sliderRef
                })
              }


              className={`flex items-center justify-between border-b border-gray-300 p-3 rounded-md transition-colors duration-150 hover:bg-[#F5F5F4] cursor-pointer ${formik.values[type] === item.value ? 'bg-[#E5E5E3]' : ''
                }`}
            >
              <div>
                <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
              <div className="bg-main text-white text-xs px-3 py-1 rounded-md font-semibold">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default AirportList;
