// components/SearchFlightsButton.jsx
import React from 'react';

const SearchFlightsButton = () => {
  return (
    <button
      type="button"
      className="w-full cursor-pointer mt-4 flex justify-center items-center gap-[10px] h-[56px] p-[10px] flex-shrink-0 rounded-[8px] bg-[#BAA981] text-white text-sm font-medium"
    >
      Search flights
    </button>
  );
};

export default SearchFlightsButton;
