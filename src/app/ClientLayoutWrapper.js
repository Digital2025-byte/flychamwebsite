// components/layout/ClientLayoutWrapper.tsx
'use client';

import Script from "next/script";
import SideBar from "@/components/Layout/SideBar";
import BottomMobileMenu from "@/components/Layout/BottomMobileMenu";
import ZohoSalesIQ from '@/components/Layout/ZohoSalesIQ';
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { MdBeachAccess } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";
import GTMScript from "@/components/Layout/GTMScript";
import GA4Script from "@/components/Layout/GA4Script";
import LanguageSwitcher from "@/components/Layout/LanguageSwitcher";
import './globals.css';
import i18n from '../../i18n'
import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";


export default function ClientLayoutWrapper({ children }) {
    const navItems = [
        { label: 'Book Flight', icon: <IoMdHome />, link: '/' },
        { label: 'Travel Experience', icon: <FaSuitcaseRolling />, link: '/destenations' },
        {
            label: 'Travel Agent', icon: <BsFillSuitcaseLgFill />
            , link: '/travel-agent'
        },
        { label: 'Holiday', icon: <MdBeachAccess /> },
        { label: 'Loyalty Program', icon: <FaGift /> },
        { label: 'About Us', icon: <MdInfoOutline />, link: '/about' },
        { label: 'Support', icon: <BiSupport />, link: '/contact' },
    ];

    return (

        <>

            <ZohoSalesIQ />
            {/* ✅ GTM Script */}
            <GTMScript />

            {/* ✅ GA4 Script */}
            <GA4Script />

            {/* ✅ GTM Noscript */}
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-TKHJ4V8W"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                ></iframe>
            </noscript>

            {/* ✅ Layout */}
            {/* <I18nextProvider i18n={i18n}> */}
            <div >
                <div className="hidden xl:block">
                    <SideBar navItems={navItems} />
                </div>
                {children}
                <div className="block xl:hidden">
                    <BottomMobileMenu navItems={navItems} />
                </div>
                <LanguageSwitcher />
            </div>
            {/* </I18nextProvider> */}

        </>
    );
}
