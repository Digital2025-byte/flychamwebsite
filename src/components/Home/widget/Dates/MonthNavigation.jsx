import React from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

const MonthNavigation = ({ currentMonth, setCurrentMonth }) => {
    return (
        <div className="  hidden md:block flex justify-between items-center mb-4 px-6">
            <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
                className="cursor-pointer w-9 h-9 rounded-full bg-[#f4f4f4] flex items-center justify-center hover:bg-[#e2e2e2] transition"
            >
                <CaretLeft size={20} className="text-gray-700" />
            </button>

            <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
                className="cursor-pointer w-9 h-9 rounded-full bg-[#f4f4f4] flex items-center justify-center hover:bg-[#e2e2e2] transition"
            >
                <CaretRight size={20} className="text-gray-700" />
            </button>
        </div>
    );
};

export default MonthNavigation;
