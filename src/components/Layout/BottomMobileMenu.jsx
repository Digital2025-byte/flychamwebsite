'use client';

import { useState } from 'react';
import { FaBars, FaGlobe, FaTimes, FaHome, FaPlane, FaUmbrellaBeach, FaGift, FaInfoCircle, FaBlog, FaHeadphones } from 'react-icons/fa';
import Image from 'next/image';
import logo from '@/assets/images/logo.webp'; // Update to your actual logo path
import { IoMdHome } from "react-icons/io";
import { MdBeachAccess } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi2";
import {
    FaSuitcaseRolling,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
const BottomMobileMenu = ({ navItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()

    return (
        <>
            {/* Fixed Bottom Menu Bar */}
            {!isOpen &&


                <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#075377] h-16 rounded-t-2xl flex items-center justify-between px-6 shadow-lg ">
                    {/* Open Menu Icon */}

                    <button onClick={() => setIsOpen(true)} className="text-white text-xl cursor-pointer">
                        <FaBars />
                    </button>

                    {/* Center Logo */}
                    <div
                    onClick={()=>{
                        router.push(`/`);
                    }}
                    className="relative w-20 h-6 cursor-pointer">
                        <Image src={logo} alt="Logo" className="object-contain" fill />
                    </div>

                    {/* Globe Icon */}
                    <button className="w-8 h-8  rounded-full flex items-center justify-center">
                        {/* <FaGlobe className="text-[#075377] text-sm" /> */}
                    </button>
                </div>}

            {/* Slide-In Menu Panel */}
            <div
                className={`w-full fixed bottom-0 left-0 right-0 bg-main z-50 transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'
                    } rounded-t-2xl`}

            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 pt-4">
                    {!isOpen ?

                        <button onClick={() => setIsOpen(true)} className="text-white text-xl cursor-pointer">
                            <FaBars />
                        </button>
                        :
                        <button onClick={() => setIsOpen(false)} className="text-white text-xl cursor-pointer">
                            <FaTimes />
                        </button>
                    }
                    <Image src={logo} alt="Logo" className="w-20 h-auto" />
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <FaGlobe className="text-[#075377] text-sm" />
                    </button>
                </div>

                {/* Navigation Menu */}
                <div className="mt-4">
                    <nav className="flex flex-col px-6 py-4 space-y-3 text-white text-sm font-medium">
                        {navItems?.map((item, idx) => {
                            return (
                                <MenuItem setIsOpen={setIsOpen} router={router} key={idx} link={item.link} icon={item.icon} label={item.label} index={item.label} false />
                            )
                        })}

                    </nav>
                </div>
            </div>
        </>
    );
};

const MenuItem = ({ router, link, icon, label, active = false,setIsOpen }) => (
    <div
        onClick={() => {
            if (link) {
                router.push(`${link}`);
                setIsOpen(false)
            }
        }}
        className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md ${active ? 'bg-secondary text-[#075377]' : 'hover:bg-secondary'}`}
    >
        <span className="text-lg relative">
            {icon}
            {label === 'Travel Agent' && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white shadow-lg"></span>
            )}
        </span>
        <span className="text-base">{label}</span>
    </div>
);


export default BottomMobileMenu;
