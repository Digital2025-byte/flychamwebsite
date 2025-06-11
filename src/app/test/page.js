'use client'
import BottomMobileMenu from '@/components/Layout/BottomMobileMenu'
import DestinationCards from '@/components/Home/DestinationSlider'
import FlightSearch from '@/components/Home/FlightSearch'
import Footer from '@/components/Layout/Footer'
import Hero from '@/components/Home/Hero'
import AboutFlyChamSection from '@/components/Home/OurCompanyCard'
import SideBar from '@/components/Layout/SideBar'
import useIsMobile from '@/hooks/useIsMobile'
import React from 'react'
// import { IoMdHome } from "react-icons/io";
// import { MdBeachAccess } from "react-icons/md";
// import { MdInfoOutline } from "react-icons/md";
// import { BiSupport } from "react-icons/bi";
// import { HiOutlineDocumentText } from "react-icons/hi2";
// import {
//   FaGift,
//   FaSuitcaseRolling,
// } from 'react-icons/fa';
import DestinationCarousel from '@/components/Home/DestinationCarousel'
import Topic from '@/components/About/Topic'
import SectionTexts from '@/components/Ui/SectionTexts'
const flight = () => {
  const isMobile = useIsMobile(1024);
  // const navItems = [
  //   { label: 'Book Flight', icon: <IoMdHome /> },
  //   { label: 'Travel Experience', icon: <FaSuitcaseRolling /> },
  //   {
  //     label: 'Holiday', icon: <MdBeachAccess />
  //   },
  //   { label: 'Loyalty Program', icon: <FaGift /> },
  //   {
  //     label: 'About Us', icon: <MdInfoOutline />


  //   },
  //   {
  //     label: 'Blogs', icon: <HiOutlineDocumentText />
  //   },
  //   {
  //     label: 'Support', icon: <BiSupport />
  //   },
  // ];
  return (
    <div className=" ">
      {/* <Topic  range={[2000, 3000]} /> */}
      {/* {!isMobile &&
        <SideBar />
      } */}
      <Hero />
      <div className="w-[80%] mx-auto px-4">
        <FlightSearch isHome />
        <div className="mt-20 mb-20">
          <SectionTexts
            head='Choose Your Destination and Plan Your Next Trip with Us'
            desc='Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.'
            btn='See All'
          />
          {isMobile &&
            <>
              <DestinationCarousel />

            </>
          }
          {!isMobile &&
            <DestinationCards />
          }
        </div>
        <div className="mt-20 mb-20">
          <SectionTexts
            head='About Fly Cham'
            desc='Learn more about our company and services'
            btn=''
          />

          <AboutFlyChamSection />
        </div>

      </div>
      <Footer />


      {/* <BottomMobileMenu navItems={navItems} /> */}
    </div>
  )
}

export default flight