import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import logo from "@/assets/images/logoblue.png";
import {
  Airplane,
  ArrowLeft,
  CalendarBlank,
  MagnifyingGlass,
  UserCircle,
  Users,
} from '@phosphor-icons/react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import formatDate from '@/util/formatDate';
import formatDateReadble from '@/util/formatDateReadble';

const Header = () => {
  const { searchParams } = useSelector((state) => state.flights)
  const { date, adults, children, infants, origin_id, destination_id } = searchParams;
  const passNum = adults + children + infants
  const formattedDeparture = formatDateReadble(date);
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const airPortsItems = useSelector((state) => state.flights.airPorts?.items) || [];
  const originAirPort = airPortsItems.find((a) => a.id === origin_id);
  const destenationAirPort = airPortsItems.find((a) => a.id === destination_id);
  const { iataCode, airPortTranslations } = originAirPort || {};
  const { iataCode: iataCodeDest } = destenationAirPort || {};
  const { country, city } = airPortTranslations?.find(a => a.languageCode === i18n.language) || {};




  const labelClass = "text-600 text-base font-normal";
  const iconColor = "#5F5F5C";

  return (
    <header className="flex w-full h-[69px] justify-center items-center gap-6 shrink-0 bg-100 max-md:h-auto max-md:py-3">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full max-w-[1400px] justify-between">

        {/* Logo */}
        <div className="flex items-center">
          {/* { !isEditFlight && <button onClick={() => router.back()}><ArrowLeft size={25} className="text-primary-1" /></button> } */}
          <Link href="/" passHref>
            <div className="cursor-pointer flex w-[180px] items-center p-2">
              <Image src={logo} alt="FlyCham Logo" width={180} height={50} className="object-contain" />
            </div>
          </Link>
        </div>

        {/* Trip Info */}
        <div className="flex h-14 items-center gap-3.5 py-3 rounded-xl max-md:flex-col max-md:w-full max-md:h-auto flex-1 justify-center">
          {/* From - To */}
          <div className="flex items-center gap-3 p-2.5 max-md:flex-col max-md:w-full">
            <div className="flex items-center gap-2 max-md:justify-center">
              {/* <span className={labelClass}>{info?.origin_country}</span>
              <span className={labelClass}>(DAM)</span> */}
            </div>
            <div className="flex items-center gap-2 max-md:justify-center">
              {/* <span className={labelClass}>{`${city} ${country}`}</span> */}
              <span className={labelClass}>{iataCode}</span>
            </div>
            <div className="rotate-90"><Airplane size={25} color={iconColor} /></div>
            <span className={labelClass}>{iataCodeDest}</span>

          </div>

          <div className="w-px h-[33px] bg-[var(--text-600)] max-lg:w-full max-lg:h-px" />

          {/* Date */}
          <div className="flex flex-col xl:flex-row items-center gap-1.5 xl:p-2.5">
            <CalendarBlank size={25} color={iconColor} className="hidden xl:block" />
            <span className={labelClass}>{formattedDeparture}</span>
          </div>

          <div className="w-px h-[33px] bg-[var(--text-600)] max-lg:w-full max-lg:h-px" />

          {/* Passengers */}
          <div className="flex flex-col xl:flex-row items-center gap-2.5 xl:p-2.5">
            <Users size={25} color={iconColor} className="hidden xl:block" />
            <span className={labelClass}>{`Passengers: ${passNum}`}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="flex h-[51px] items-center gap-1 bg-secondary-1 px-2.5 py-[5px] rounded-lg hover:bg-[#A89770] transition-colors text-[#FDFDFC] font-bold max-sm:w-full max-sm:justify-center">
            <MagnifyingGlass size={25} color="#FFF" />
            <span>Modify search</span>
          </button>
          <UserCircle size={25} className="text-500 cursor-pointer" />
        </div>

      </div>
    </header>
  );
};

export default Header;
