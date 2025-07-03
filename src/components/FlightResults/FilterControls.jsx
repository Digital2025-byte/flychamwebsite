import React from 'react';

const FilterControls = () => {
    return (
        <div className="flex gap-6 items-center max-md:w-full max-md:justify-between max-md:mt-4 max-sm:flex-col max-sm:gap-3">
            <div className="inline-flex justify-center items-center gap-2.5 border w-[143px] h-[37px] p-2.5 rounded-xl border-solid border-[#E5E5E3] max-sm:w-full">
                <select className="text-[#5F5F5C] text-center text-sm font-normal bg-transparent border-none outline-none w-full">
                    <option value="USD">USD (US Dollar) $</option>
                    <option value="EUR">EUR (Euro) €</option>
                    <option value="GBP">GBP (British Pound) £</option>
                </select>
            </div>

            <button className="inline-flex h-[37px] justify-center items-center gap-2.5 shrink-0 border w-[152px] p-2.5 rounded-xl border-solid border-[#E5E5E3] max-sm:w-full hover:bg-gray-50 transition-colors">
                <div>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter-icon" style={{ display: 'flex', width: '24px', padding: '6px 1px', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
                        <path d="M19 12.5C19 12.7984 18.8815 13.0845 18.6705 13.2955C18.4595 13.5065 18.1734 13.625 17.875 13.625H5.875C5.57663 13.625 5.29048 13.5065 5.0795 13.2955C4.86853 13.0845 4.75 12.7984 4.75 12.5C4.75 12.2016 4.86853 11.9155 5.0795 11.7045C5.29048 11.4935 5.57663 11.375 5.875 11.375H17.875C18.1734 11.375 18.4595 11.4935 18.6705 11.7045C18.8815 11.9155 19 12.2016 19 12.5ZM21.625 6.875H2.125C1.82663 6.875 1.54048 6.99353 1.3295 7.2045C1.11853 7.41548 1 7.70163 1 8C1 8.29837 1.11853 8.58452 1.3295 8.7955C1.54048 9.00647 1.82663 9.125 2.125 9.125H21.625C21.9234 9.125 22.2095 9.00647 22.4205 8.7955C22.6315 8.58452 22.75 8.29837 22.75 8C22.75 7.70163 22.6315 7.41548 22.4205 7.2045C22.2095 6.99353 21.9234 6.875 21.625 6.875ZM14.125 15.875H9.625C9.32663 15.875 9.04048 15.9935 8.8295 16.2045C8.61853 16.4155 8.5 16.7016 8.5 17C8.5 17.2984 8.61853 17.5845 8.8295 17.7955C9.04048 18.0065 9.32663 18.125 9.625 18.125H14.125C14.4234 18.125 14.7095 18.0065 14.9205 17.7955C15.1315 17.5845 15.25 17.2984 15.25 17C15.25 16.7016 15.1315 16.4155 14.9205 16.2045C14.7095 15.9935 14.4234 15.875 14.125 15.875Z" fill="#5F5F5C"></path>
                    </svg>
                </div>
                <span className="text-[#5F5F5C] text-sm font-normal">Sort and filter</span>
            </button>
        </div>
    );
};

export default FilterControls;
