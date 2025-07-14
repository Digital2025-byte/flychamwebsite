'use client'
import { X } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const SearchInput = ({ search, placeholder, handleSearch }) => {
  const inputRef = useRef(null);
useEffect(() => {
  inputRef.current?.focus();
}, []);
  return (
    <div className="rounded-t-2xl py-6">
      <div className="flex items-center border-b border-gray-300">
        <input
          ref={inputRef}

          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}

          placeholder={placeholder}
          className="w-full text-gray-700 placeholder-gray-400 text-sm px-0 py-2 focus:outline-none"
        />
        {search && (
          <button
            onClick={() => {

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

export default React.memo(SearchInput);
