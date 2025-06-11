'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo.webp';
import tabicon from '@/assets/images/tabicon.png';
import pattern from '@/assets/images/pattern.webp';
import {
    FaPlane,
    FaSuitcaseRolling,
    FaUser,
    FaGift,
    FaGlobe,
    FaQuestionCircle,
    FaHome,
} from 'react-icons/fa';
import arrow from "@/assets/arrow.svg"
import { useRouter } from "next/navigation";
import useIsArabic from '@/hooks/useIsArabic';

const SideBar = ({ navItems }) => {
    const [isOpen, setIsOpen] = useState(true)
    const [isManuallyControlled, setIsManuallyControlled] = useState(false) // Track if user manually closed it
    const router = useRouter()
    const isArabic = useIsArabic();

    const handleMouseEnter = () => {
        // Only respond to hover if sidebar was manually closed
        if (isManuallyControlled && !isOpen) {
            setIsOpen(true)
        }
    }

    const handleMouseLeave = () => {
        // Only respond to hover if sidebar was manually closed
        if (isManuallyControlled && isOpen) {
            setIsOpen(false)
        }
    }

    const handleArrowClick = () => {
        if (isOpen) {
            // Closing via arrow - enable hover behavior
            setIsOpen(false)
            setIsManuallyControlled(true)
        } else {
            // Opening via arrow - disable hover behavior (return to default)
            setIsOpen(true)
            setIsManuallyControlled(false)
        }
    }

    return (
        <div
            className={`fixed  ${isArabic ? 'right-0' : 'left-0'} h-screen bg-main text-white flex flex-col justify-between transition-all duration-600 shadow-xl ${isArabic ? 'rounded-l-2xl' : 'rounded-r-2xl'} z-50 xl:pt-8`}
            style={{
                width: isOpen ? '220px' : '80px',
            }}

        >
            {/* Top section */}
            <div className=" h-120 py-6 px-4">

                <div
                    onClick={handleArrowClick}
                    className={`absolute top-[30px] ${isArabic ? 'left-[-10px]' : 'right-[-10px]'}  cursor-pointer transition-transform duration-300`}
                >
                    <Image
                        src={arrow}
                        alt="Fly Cham arrow"
                        width={20}
                        height={20}
                        className={`${!isOpen ? 'rotate-180' : ''} transition-transform duration-300`}
                    />
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-hidden rounded-br-[16px]">
                    <Image
                        src={pattern}
                        alt="Fly Cham pattern"
                        width={250}
                        height={250}
                        className=" w-full h-full"
                    />
                </div>

                <div className="space-y-6"

                >
                    <div className="flex items-center justify-between">
                        {isOpen ?
                            <Image onClick={() => router.push(`/`)}
                                src={logo} alt="Fly Cham Logo" width={160} height={40} className='cursor-pointer' /> :
                            <Image onClick={() => router.push(`/`)}
                                src={tabicon} alt="Fly Cham Logo" width={30} height={30} className='cursor-pointer' />
                        }
                    </div>

                    {/* Navigation */}
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <nav

                            className="flex flex-col gap-2 mt-9">
                            {navItems.map((item, index) => (
                                <button
                                    key={item.label}
                                    className={`w-full flex  items-center gap-3 py-2 px-3 rounded-md text-white hover:bg-secondary hover:text-white transition font-semibold`}
                                    style={{
                                        fontFamily: 'Montserrat, sans-serif',
                                        fontSize: '15px',
                                        fontStyle: 'normal',
                                        lineHeight: '15.791px',
                                    }}
                                    onClick={() => {
                                        if (item.link) {
                                            router.push(`${item.link}`)
                                        }
                                    }}
                                >
                                    <div className="flex items-center relative">
                                        {/* Icon */}
                                        <span className="text-lg relative">
                                            {item.icon}

                                            {/* Enhanced red circle for Travel Agent */}
                                            {item.label === 'Travel Agent' && (
                                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white shadow-lg"></span>
                                            )}
                                        </span>

                                        {/* Label */}
                                        <span
                                            className={`mx-2 cursor-pointer transition-opacity duration-300 whitespace-nowrap ml-3 ${isOpen ? 'opacity-100 delay-100' : 'opacity-0'
                                                }`}
                                        >
                                            {item.label}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;