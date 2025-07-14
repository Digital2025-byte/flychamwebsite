'use client'
import React from 'react';

const Input = ({
  id = 'floating-input',
  type = 'text',
  label = 'Input',
  placeholder = ' ',
  value,
  onChange,
  name,
  className = '',
  ...props
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input-theme peer block w-full rounded-xl border border-gray-300 bg-100 px-4 pt-6 pb-2 text-sm text-gray-600 placeholder-transparent focus:outline-none focus:border-[var(--primary-1)] ${className}`}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute top-0 start-0 px-4 pt-[18px] text-sm text-gray-600 truncate pointer-events-none transition duration-100 ease-in-out origin-[0_0] h-full
          peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:scale-90 peer-focus:-translate-y-2 peer-focus:text-[var(--primary-1)]
          peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:-translate-y-2
          peer-not-placeholder-shown:text-[var(--primary-1)]"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
