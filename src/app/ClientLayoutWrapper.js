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
import { I18nextProvider, useTranslation } from "react-i18next";
import { useEffect } from "react";
import Footer from "@/components/Layout/Footer";
import { useParams, usePathname } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile";
import useIsArabic from "@/hooks/useIsArabic";
import ImportantAlert from "@/components/Ui/Alert";


export default function ClientLayoutWrapper({ children }) {
    const pathname = usePathname()
    const isMobile = useIsMobile()
    const { t } = useTranslation();
    const isAr = useIsArabic()
    const navItems = [
        { label: t('nav.bookFlight'), icon: <IoMdHome />, link: '/' },
        { label: t('nav.travelExperience'), icon: <FaSuitcaseRolling />, link: '/destenations' },
        { label: t('nav.travelAgent'), icon: <BsFillSuitcaseLgFill />, link: '/travel-agent' },
        { label: t('nav.holiday'), icon: <MdBeachAccess /> },
        { label: t('nav.loyaltyProgram'), icon: <FaGift /> },
        { label: t('nav.aboutUs'), icon: <MdInfoOutline /> },
        { label: t('nav.support'), icon: <BiSupport />, link: '/contact' },
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
                <div className="flex h-screen overflow-hidden">
                    {/* Sidebar */}
                    <aside className="hidden xl:block   h-screen shadow-xl z-50">
                        {/* {(pathname !== '/about' || pathname !== '/Mission') && */}
                        <SideBar navItems={navItems} />
                        {/* } */}
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 w-[100%] h-screen overflow-y-auto bg-white  ">
                
                        {children}
                        {(pathname !== '/about' && pathname !== '/Mission') && <Footer />}

                    </main>
                </div>



                {/* <div className="hidden xl:block">
                    <LanguageSwitcher />
                </div> */}



            </div>
            <div className="block xl:hidden">
                <BottomMobileMenu navItems={navItems} />
            </div>
            {/* </I18nextProvider> */}

        </>
    );
}
