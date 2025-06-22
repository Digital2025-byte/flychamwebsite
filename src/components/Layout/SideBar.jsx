'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo.webp';
import tabicon from '@/assets/images/tabicon.png';
import pattern from '@/assets/images/pattern.webp';
import arrow from "@/assets/arrow.svg"
import { useRouter } from "next/navigation";
import useIsArabic from '@/hooks/useIsArabic';
import { useTranslation } from 'react-i18next';
import { GlobeHemisphereWestIcon } from '@phosphor-icons/react';
import SubMenu from './SubMenu';
import LanguageSwitchButton from './LanguageSwitchButton';

const SideBar = ({ navItems, isOpen, setIsOpen }) => {
    const [isManuallyControlled, setIsManuallyControlled] = useState(false) // Track if user manually closed it
    const router = useRouter()
    const isArabic = useIsArabic();
    const { i18n,t } = useTranslation()
    const [hoveredItem, setHoveredItem] = useState(null);

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
            setIsOpen(false);
            setIsManuallyControlled(true);
        } else {
            setIsOpen(true);
            setIsManuallyControlled(false);
        }


    };

    return (
        <div
            className={`relative  ${isArabic ? 'right-0' : 'left-0'} h-screen bg-main text-white flex flex-col justify-between transition-all duration-700 shadow-xl
                z-50 xl:pt-8`}
            style={{
                width: isOpen ? '220px' : '80px',
            }}

        >
            {/* ${isArabic ? 'rounded-bl-2xl' : 'rounded-br-2xl'} */}

            {/* Top section */}
            <div className=" h-120 py-6 px-4">

                <div
                    onClick={handleArrowClick}
                    className={`absolute top-[120px] ${isArabic ? 'left-[-10px]' : 'right-[-10px]'} cursor-pointer transition-transform duration-700`}
                >
                    <Image
                        src={arrow}
                        alt="Fly Cham arrow"
                        width={20}
                        height={20}
                        className={`transition-transform duration-300 ${!isArabic
                            ? isOpen ? '' : 'rotate-180' // Rotate when closed (Arabic)
                            : isOpen ? 'rotate-180' : '' // Rotate when closed (English)
                            }`}
                    />
                </div>

                            {isOpen && 
                            
                <div className="absolute bottom-0 left-0 opacity-50 w-full overflow-hidden rounded-br-[16px]">
                    <Image
                        src={pattern}
                        alt="Fly Cham pattern"
                        width={250}
                        height={250}
                        className=" w-full h-full"
                        />
                </div>
                    }

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
                            <nav className="flex flex-col gap-2 mt-9">
                                {navItems.map((item, index) => (
                                    <div
                                        key={item.label}
                                        className="relative group"
                                        onMouseEnter={() => setHoveredItem(index)}
                                    >
                                        <button
                                            className={`cursor-pointer w-full flex items-center gap-3 py-2 px-3 rounded-md text-white hover:bg-secondary hover:text-white transition font-semibold`}
                                            style={{
                                                fontFamily: 'Montserrat, sans-serif',
                                                fontSize: '15px',
                                                fontStyle: 'normal',
                                                lineHeight: '15.791px',
                                            }}
                                            onClick={() => {
                                                if (item.link) {
                                                    router.push(`${item.link}`);
                                                }
                                            }}
                                        >
                                            <div className="flex gap-2 items-center relative">
                                                <span className="text-lg relative">
                                                    <item.icon
                                                        size={24}
                                                        weight={hoveredItem === index ? 'fill' : 'bold'}
                                                        color="white"
                                                    />
                                                </span>
                                                {item.label === t('nav.travelAgent') && (
                                   <span
    className={`absolute -top-1 ${isArabic ? 'left-20' : 'right-25'} w-3 h-3 bg-red-500 rounded-full border border-white shadow`}
  />
                                                )}

                                                <span
                                                    className={`ml-3 whitespace-nowrap transition-all duration-300 ${isOpen
                                                        ? 'opacity-100'
                                                        : 'opacity-0 w-0 overflow-hidden'
                                                        }`}
                                                >
                                                    {item.label}
                                                </span>
                                            </div>
                                        </button>

                                        {/* Submenu */}
                                        <SubMenu
                                            subLinks={item.subLinks}
                                            isOpen={hoveredItem === index}
                                            setHoveredItem={setHoveredItem}
                                        />
                                    </div>
                                ))}
                            </nav>



                        </nav>
                        {/* Language Switch Button */}
                        <LanguageSwitchButton isOpen={isOpen} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;