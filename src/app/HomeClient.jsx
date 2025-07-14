'use client'
import BottomMobileMenu from '@/components/Layout/BottomMobileMenu'
import DestinationCards from '@/components/Home/DestinationSlider'
import FlightSearch from '@/components/Home/FlightSearch'
import Footer from '@/components/Layout/Footer'
import Hero from '@/components/Home/Hero'
import AboutFlyChamSection from '@/components/Home/OurCompanyCard'
import SideBar from '@/components/Layout/SideBar'
import useIsMobile from '@/hooks/useIsMobile'
import React, { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation';

import DestinationCarousel from '@/components/Home/DestinationCarousel'
import Topic from '@/components/About/Topic'
import Panner from '@/components/Home/Panner'
import Help from '@/components/Home/Help'
import SectionTexts from '@/components/Ui/SectionTexts'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation';
import bg1 from '../assets/images/main-slider/bg1.webp';
import bg2 from '../assets/images/main-slider/bg2.webp';
import bg3 from '../assets/images/main-slider/bg3.webp';
import ImportantAlert from '@/components/Ui/Alert'
import BookingBox from '@/components/Home/SearchFlight'
import { useDispatch, useSelector } from 'react-redux'
import { setAirports, setSearchParams } from '@/store/flightSlice'
import { getAirports, getFlightsService } from '@/store/Services/flightServices'
import { useFormik } from 'formik'
import formatDate from '@/util/formatDate'
const HomeClient = ({ flights }) => {

  const dispatch = useDispatch()
  const isMobile = useIsMobile(1024);
  const router = useRouter()
  const { t } = useTranslation()
  const handleNavigate = () => {
    router.push('/destenations')
  }
  const slides = [bg1, bg2, bg3];

  useEffect(() => {
    dispatch(setAirports(flights))
  }, [])

  // useEffect(() => {
  //   dispatch(getAirports({ search }))
  // }, [search])
  const { airPorts } = useSelector(state => state.flights)

  const [cities, setCities] = useState([])
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (airPorts?.items?.length > 0) {

      setCities(airPorts.items)
    }
  }, [])
  const getCitiesArray = (type, iataSourceCode, search = "") => {
    const normalizedSearch = search.toLowerCase();

    const filtered = cities?.filter((c) => {
      const { airPortTranslations, iataCode } = c;
      const { airPortName, city, country } = airPortTranslations?.[0] || {};
      const matchesSearch = (
        airPortName?.toLowerCase().includes(normalizedSearch) ||
        city?.toLowerCase().includes(normalizedSearch) ||
        country?.toLowerCase().includes(normalizedSearch) ||
        iataCode?.toLowerCase().includes(normalizedSearch)
      );

      if (!matchesSearch) return false;

      if (type === "source") {
        return true; // all match
      }

      // Destination logic
      if (iataSourceCode === "DAM" || iataSourceCode === "ALP") {
        return iataCode !== "DAM" && iataCode !== "ALP";
      } else {
        return iataCode === "DAM" || iataCode === "ALP";
      }
    });

    return filtered || [];
  };

  const formik = useFormik({
    enableReinitialize: false,
    initialValues: {
      source: '',
      destination: '',
      adults: 1,
      children: 0,
      infants: 0,
      promoCode: '',
      cabinClass: 'Economy',
      dateStart: '',
      dateEnd: '',
      type: 0,
      tripType: 'roundTrip',
      neirby: false
    },
    onSubmit: (values) => {
      const {
        cabinClass,
        source,
        destination,
        dateStart,
        dateEnd,
        adults,
        children, infants, type, neirby, tripType

      } = values;
      const formattedDeparture = formatDate(dateStart);
      const formattedReturn = formatDate(dateEnd);
      const flightclass = cabinClass === 'Economy' ? 'Y' : 'C'
      const data = {
        origin_id: source,
        destination_id: destination
        ,
        date: formattedDeparture,
        date_return: formattedReturn,
        adults: adults,
        children: children,
        infants: infants,
        flightclass: flightclass,
        flighttype: tripType,
        pos_id: 7,
        neirby
      }
      console.log('data', data);
      dispatch(getFlightsService(data)).then((action) => {
        if (getFlightsService.fulfilled.match(action)) {
          router.push('/search-results')
          dispatch(setSearchParams(data))
        }
      })
    }



  });



  return (
    <div className="transition-all duration-700">

      {/* <ImportantAlert /> */}
      <Hero slides={slides} title={t('sliderTitle')} subTitle={t('sliderDesc')} isNavigationBtns />
      <div className="">
        <div className="w-[90%] md:w-[70%] mx-auto">

          {/* <FlightSearch isHome /> */}
          <BookingBox getCitiesArray={getCitiesArray} setCities={setCities} cities={cities} airPorts={airPorts}
            search={search}
            setSearch={setSearch}
            formik={formik}
          />
        </div>
        <div className='w-[90%] mx-auto px-2'>


          <div className="mt-20 mb-20 w-[100%] justify-self-center">
            <SectionTexts
              head={t('home.destination.head')}
              desc={t('home.destination.desc')}
              btn={!isMobile === true ? t('home.destination.button') : ""}
              redirectLink="/destination"
            />
            {isMobile &&
              <>
                <DestinationCarousel />
                <button onClick={handleNavigate}
                  className="w-full xl:w-auto mt-4 xl:mt-0 cursor-pointer border border-sky-900 text-sky-900 text-sm px-4 py-2 rounded hover:bg-sky-900 hover:text-white transition"
                >
                  See All
                </button>
              </>
            }
            {!isMobile &&
              <DestinationCards handleNavigate={handleNavigate} />
            }

          </div>
          <div className="mt-20 mb-20 w-[100%] justify-self-center">
            <SectionTexts
              head={t("home.AboutTitle")}
              desc={t("home.AboutDesc")}
              btn=''
            />

            <AboutFlyChamSection />
            {/* <div className="my-20">
            <Panner />
          </div> */}

          </div>
        </div>
        {/* <div className='my-2'>
              <Help />
            </div> */}
      </div>


      {/* <BottomMobileMenu navItems={navItems} /> */}
    </div>
  )
}

export default HomeClient