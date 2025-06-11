'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

import { FaPlaneDeparture } from 'react-icons/fa6';
import SearchTabs from '@/components/Home/SearchTabs';
import FlightSearch from '@/components/Home/FlightSearch';
import DestinationCarousel from '@/components/Home/DestinationCarousel';
import Footer from '@/components/Layout/Footer';
import destinations from './data';

const DestinationCard = ({ name, description }) => (
    <div className="group bg-white rounded-xl p-5 shadow-lg w-full max-w-xs text-black transition hover:shadow-2xl hover:-translate-y-1">
        <div className="flex items-center gap-2 mb-2">
            <FaMapMarkerAlt className="text-black" />
            <h3 className="text-[28px] font-semibold ">{name}</h3>
        </div>
        <p className="text-[12.6px] font-normal ">{description}</p>
    </div>

);

// Arrows
const NextArrow = ({ onClick }) => (
    <button onClick={onClick} className="text-white text-3xl z-10 absolute right-4 top-1/2 transform -translate-y-1/2">
        <MdArrowForwardIos />
    </button>
);
const PrevArrow = ({ onClick }) => (
    <button onClick={onClick} className="text-white text-3xl z-10 absolute left-4 top-1/2 transform -translate-y-1/2">
        <MdArrowBackIos />
    </button>
);

const Page = () => {
    const sliderRef = useRef();

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,        
        arrows: false, // Disable default arrows

    };
    const handleClickBookNow = () => {
        const widget = document.getElementById("search-widget");
        if (widget) {
            widget.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <div className=" relative w-full min-h-screen ">
                <Slider {...settings} ref={sliderRef}>
                    {destinations.map((destination, index) => (
                        <div key={index}>
                            {/* Background */}
                            <div className="relative w-full min-h-screen">
                                <Image
                                    src={destination.background}
                                    alt={destination.country}
                                    fill
                                    className="object-cover brightness-[0.6]"
                                />

                                {/* Overlay Content */}
                                <div className="relative z-10 flex flex-col lg:flex-row items-start md:items-center justify-between w-full max-w-7xl mx-auto py-20 gap-8 min-h-screen">
                                    {/* Left Section */}
                          {/* Left Section */}
<div className="w-full md:max-w-xl text-white px-5 md:px-4 text-center lg:text-left">
  <h1 className="text-[#f5f0e6] text-[32px] sm:text-[42px] md:text-[72px] font-bold leading-tight md:leading-[63px] tracking-tight md:tracking-[0.18px] drop-shadow-lg" style={{lineHeight:"1.2"}}>
    Never Stop Exploring The World.
  </h1>

  <p className="mt-4 lg:mt-6 text-[#f5f0e6] text-[16px] sm:text-[18px] md:text-[14px] font-semibold leading-relaxed md:leading-[22px] tracking-[0.04px] drop-shadow-md">
    Discover Fly Cham destinations, including domestic, international, and indirect destinations, offering you comprehensive and comfortable travel services. Browse our flight schedule and book your next journey with us.
  </p>

  <div className="w-full flex justify-center lg:justify-start">
    <button
      onClick={handleClickBookNow}
      className="cursor-pointer mt-6 bg-main hover:bg-[#003e61] text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2 transition duration-300 group"
    >
      <span className="transition-transform duration-300">Book Now</span>
      <FaPlaneDeparture className="text-white text-lg transition-all duration-300" />
    </button>
  </div>
</div>

                                    {/* Right Section */}
                                    <div className="flex flex-col items-center gap-6 w-full md:max-w-xl">
                                        <div className=" flex items-center gap-4">
                                            <button
                                                onClick={() => sliderRef.current.slickPrev()}
                                                className="cursor-pointer text-white text-lg md:text-3xl bg-white/10 backdrop-blur-md hover:bg-white hover:text-main transition-all duration-300 p-3 rounded-full shadow-xl border border-white/20 hover:scale-110"
                                            >
                                                <MdArrowBackIos />
                                            </button>


                                            <h2 className="text-[#D9D9D9] text-[70px] md:text-[128px] font-bold  tracking-[0.32px] drop-shadow-lg">
                                                {destination.country}
                                            </h2>

                                            <button
                                                onClick={() => sliderRef.current.slickNext()}
                                                className="cursor-pointer text-white text-lg md:text-3xl bg-white/10 backdrop-blur-md hover:bg-white hover:text-main transition-all duration-300 p-3 rounded-full shadow-xl border border-white/20 hover:scale-110"
                                            >
                                                <MdArrowForwardIos />
                                            </button>
                                        </div>

                                        <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center lg:items-stretch">
                                            {destination.cities.map((city) => (
                                                <DestinationCard
                                                    key={city.name}
                                                    name={city.name}
                                                    description={city.description}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* <div className='block xl:hidden p-8'>
                <DestinationCarousel />

            </div> */}
            <div className="p-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-2 tracking-tight text-main drop-shadow-sm">
                    Let’s Book Your Next Flight
                </h1>
                <FlightSearch isHome />
            </div>

            <div className=' block xl:hidden  h-[64px]'></div>
            <Footer />
        </>

    );
};

export default Page;
