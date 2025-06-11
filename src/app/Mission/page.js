"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import plane from "@/assets/images/mission/plane.webp";
import pattern from "@/assets/images/mission/pattern.webp";
import hostess from "@/assets/images/mission/hostess.webp";
import pattern2 from "@/assets/images/mission/pattern2.webp";
import pattern3 from "@/assets/images/mission/pattern3.webp";
import hostess2 from "@/assets/images/mission/hostess2.webp";
import hostess3 from "@/assets/images/mission/hostess3.webp";
import pattern4 from "@/assets/images/mission/pattern4.webp";
import SideBar from "@/components/Layout/SideBar";
import useCustomScroller from "@/hooks/useCustomScroller";
import CustomScroller from "@/components/Ui/CustomScroller";

const sections = [
    {
        id: "plane",
        content: (
            <div className="flex flex-col justify-center h-full items-center z-10">
                <img
                    src={pattern.src || pattern}
                    alt="pattern"
                    className="absolute top-0 right-0 w-full max-w-xl lg:max-w-2xl z-0 opacity-80"
                />
                <h2 className="text-center text-[#2A2A2A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold drop-shadow-md leading-tight mb-4 md:mb-8 px-4">
                    Towards a Future Full<br />of Excellence
                </h2>
                <img src={plane.src || plane} alt="Fly Cham Plane" className="w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl h-auto z-10 px-4" />
            </div>
        ),
    },
    {
        id: "mission",
        content: (
            <div className="relative z-10 h-full flex flex-wrap items-center justify-between gap-4 md:gap-8">
                <img src={pattern2.src || pattern2} alt="pattern" className="absolute top-0 left-0 w-full max-w-3xl lg:max-w-4xl z-0 opacity-70" />
                <div className="flex-1 min-w-[300px] z-10 py-6 md:py-10 px-6 md:px-12 lg:px-20 text-center">
                    <h2 className="text-[#2A2A2A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">Our Mission</h2>
                    <p className="text-[#2A2A2A] text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-relaxed max-w-3xl mx-auto">
                        Our mission is to deliver a trusted, seamless, and memorable flight experience for every passenger while providing efficient and reliable airline services across our expanding network of domestic and regional flight destinations. We are committed to raising the bar for the region's aviation sector by ensuring operational safety and security on every flight.
                    </p>
                </div>
                <div className="relative flex-1 min-w-[300px] flex items-center justify-center z-10">
                    <div className="absolute right-0 top-0 lg:top-[20%] w-[80%] h-[70%] bg-[#EFE9E1] rounded-tl-[40px] z-0"></div>
                    <img src={hostess.src || hostess} alt="hostess" className="relative z-10 w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto" />
                </div>
            </div>
        ),
    },
    {
        id: "vision",
        content: (
            <div className="relative z-10 h-full flex flex-wrap items-center justify-between gap-4 md:gap-8">
                <div className="relative flex-1 min-w-[300px] flex items-center justify-center z-10">
                    <div className="absolute left-0 top-[20%] w-[80%] h-[70%] bg-[#EFE9E1] rounded-tr-[40px] z-0"></div>
                    <img src={hostess2.src || hostess2} alt="hostess2" className="hidden md:block relative z-10 w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto" />
                </div>
                <img src={pattern3.src || pattern3} alt="pattern" className="absolute top-0 left-0 w-full max-w-4xl lg:max-w-6xl z-0 opacity-60" />
                <div className="flex-1 min-w-[300px] z-10 p-6 md:p-8 text-center">
                    <h2 className="text-[#2A2A2A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">Our Vision</h2>
                    <p className="text-[#2A2A2A] text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-relaxed max-w-2xl mx-auto">
                        To become the leading airline brand in the region, recognized for its reliability, innovation, and hospitality.
                        <br />
                        Fly Cham aspires to be the preferred air carrier, serving as a vital bridge between Syria and international destinations through world-class air travel experiences.
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: "values",
        content: (
            <div className="relative z-10 h-full flex flex-wrap items-start md:items-center justify-between gap-4 md:gap-8">
                <div className="relative hidden md:block flex-1 min-w-[300px] flex items-center justify-center z-10">
                    <div className="absolute left-0 top-[20%] w-[80%] h-[70%] bg-[#EFE9E1] rounded-tr-[40px] z-0"></div>
                    <img src={hostess3.src || hostess3} alt="hostess3" className="relative z-10 w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto" />
                </div>
                <img src={pattern4.src || pattern4} alt="pattern" className="absolute top-0 right-0 w-full max-w-4xl lg:max-w-5xl z-0 opacity-70" />
                <div className="flex-1 min-w-[300px] z-10 p-6 md:p-8">
                    <h2 className="text-[#2A2A2A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-4 md:mb-6 leading-tight">Our Core Values</h2>
                    <div className="text-[#2A2A2A] text-base md:text-lg lg:text-xl font-montserrat space-y-5 md:space-y-6 font-semibold max-w-3xl mx-auto">
                        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 md:p-5 border-l-4 border-[#2A2A2A] shadow-sm">
                            <span className="font-black text-lg md:text-xl lg:text-2xl block mb-2">Customer Focus</span>
                            <span className="font-medium text-[#444444]">We prioritize customer satisfaction, hospitality, and passengers' comfort throughout every journey.</span>
                        </div>
                        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 md:p-5 border-l-4 border-[#2A2A2A] shadow-sm">
                            <span className="font-black text-lg md:text-xl lg:text-2xl block mb-2">Excellence</span>
                            <span className="font-medium text-[#444444]">We maintain the highest levels of efficiency in all aspects of our journeys, from the moment you book your ticket to your arrival at your destination.</span>
                        </div>
                        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 md:p-5 border-l-4 border-[#2A2A2A] shadow-sm">
                            <span className="font-black text-lg md:text-xl lg:text-2xl block mb-2">Professionalism</span>
                            <span className="font-medium text-[#444444]">Our team is distinguished by professionalism, high skill levels (highest standards), and a commitment to providing exceptional customer service.</span>
                        </div>
                        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 md:p-5 border-l-4 border-[#2A2A2A] shadow-sm">
                            <span className="font-black text-lg md:text-xl lg:text-2xl block mb-2">Teamwork</span>
                            <span className="font-medium text-[#444444]">We believe great journeys are made possible by great teams. Our team works cooperatively and passionately to provide the highest levels of service and meet passengers' needs, ensuring their comfort throughout the journey.</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];
const Mission = () => {
    const isDragging = useRef(false);
    const {
        current,
        setCurrent,
        thumbTop,
        trackRef,
        handleTrackClick,
        handleThumbMouseDown,
        thumbHeight,
    } = useCustomScroller(sections.length);
    return (
        <div className="relative w-screen h-screen bg-white overflow-hidden flex">
            {/* Section View */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={sections[current].id}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -60 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full flex items-center justify-center"
                >
                    {sections[current].content}
                </motion.div>
            </AnimatePresence>

            {/* Custom Scrollbar */}
            <CustomScroller
                trackRef={trackRef}
                thumbTop={thumbTop}
                thumbHeight={thumbHeight}
                handleTrackClick={handleTrackClick}
                handleThumbMouseDown={handleThumbMouseDown}
            />

        </div>
    );
};

export default Mission;