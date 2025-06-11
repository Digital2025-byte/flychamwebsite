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
import { useRouter } from 'next/navigation';

import DestinationCarousel from '@/components/Home/DestinationCarousel'
import Topic from '@/components/About/Topic'
import Panner from '@/components/Home/Panner'
import Help from '@/components/Home/Help'
import SectionTexts from '@/components/Ui/SectionTexts'
import { useTranslation } from 'react-i18next'
const flight = () => {
  const isMobile = useIsMobile(1024);
  const router = useRouter()
  const { t } = useTranslation()
  return (
    <div className=" ">

      <Hero />
      <div className="w-full xl:w-[70%] mx-auto px-4">
        <FlightSearch isHome />
        <div className="mt-20 mb-20 w-[80%] justify-self-center">
          <SectionTexts
            head={t('home.destination.head')}
            desc={t('home.destination.desc')}
            btn={!isMobile === true ? t('home.destination.button') : ""}
            redirectLink="/destination"
          />
          {isMobile &&
            <>
              <DestinationCarousel />
              <button className="w-full xl:w-auto mt-4 xl:mt-0 cursor-pointer border border-sky-900 text-sky-900 text-sm px-4 py-2 rounded hover:bg-sky-900 hover:text-white transition" onClick={() => router.push(`/destenations`)}>
                See All
              </button>
            </>
          }
          {!isMobile &&
            <DestinationCards />
          }

        </div>
        <div className="mt-20 mb-20 w-[85%] justify-self-center">
          <SectionTexts
            head={t("About title")}
            desc='Learn more about our company and services'
            btn=''
          />

          <AboutFlyChamSection />
          {/* <div className="my-20">
            <Panner />
          </div> */}

        </div>
        {/* <div className='my-2'>
              <Help />
            </div> */}
      </div>
      <Footer />


      {/* <BottomMobileMenu navItems={navItems} /> */}
    </div>
  )
}

export default flight