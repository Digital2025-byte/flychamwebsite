'use client'
import { X } from "@phosphor-icons/react";
import { useState } from "react";
import { useSelector } from "react-redux";

const SearchInput = ({search,setSearch, setCities, placeholder, formik, type, cities }) => {
  const { airPorts } = useSelector(state => state.flights);

  const handleSearch = (searchValue) => {
    const normalizedSearch = searchValue.toLowerCase();

    if (!normalizedSearch) {
      console.log('!normalizedSearch', !normalizedSearch);

      setCities(airPorts.items); // Show all airports if search is empty
      return;
    }

    const filtered = cities?.filter((c) => {
      const { airPortTranslations } = c;
      const { airPortName = "" } = airPortTranslations?.[0] || {};

      return airPortName.toLowerCase().includes(normalizedSearch);
    });

    setCities(filtered || []);
  };

  return (
    <div className="rounded-t-2xl py-6">
      <div className="flex items-center border-b border-gray-300">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            const val = e.target.value;
            setSearch(val);
            handleSearch(val);
          }}
          placeholder={placeholder}
          className="w-full text-gray-700 placeholder-gray-400 text-sm px-0 py-2 focus:outline-none"
        />
        {search && (
          <button
            onClick={() => {
              setSearch('');
              handleSearch('');
            }}
            className="cursor-pointer text-gray-700 hover:text-black text-sm px-2"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
