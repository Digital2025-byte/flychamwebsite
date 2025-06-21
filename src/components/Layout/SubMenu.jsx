'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const SubMenu = ({ subLinks, isOpen, setHoveredItem }) => {
    const router = useRouter();

    if (!isOpen || subLinks.length === 0) return null;

    return (
        <div
            className="absolute top-1/2 left-[108%] -translate-y-1/2 bg-main-light text-white rounded-tr-md rounded-br-md p-3 w-[220px] shadow-lg z-50"
            onMouseLeave={(e) => {
                e.stopPropagation()
                setHoveredItem(null)
            }}
        >
            {/* Arrow notch */}
            <div
                className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-main-light rotate-45"
                style={{
                    borderRadius: '2px',
                }}
            ></div>

            {subLinks.map((sub, index) => (
                <button
                    key={sub.label}
                    onClick={() => router.push(sub.link)}
                    className="block w-full text-left px-4 py-2 text-[15px] font-medium hover:bg-secondary hover:text-white transition rounded-md"
                >
                    {sub.label}
                </button>
            ))}
        </div>
    );
};

export default SubMenu;
