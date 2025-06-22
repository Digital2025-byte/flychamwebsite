'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { InfoIcon, XIcon } from '@phosphor-icons/react';
import Slider from 'react-slick';
import useIsArabic from '@/hooks/useIsArabic';

export default function ImportantAlert() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  const isArabic = useIsArabic()
  const alerts = [
    t('travelCard.titleUAE'),
    t('travelCard.titleMuscat'),
    t('travelCard.titleIraq'),
    t('travelCard.titleKuwait')
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true
  };

  if (!isVisible) return null;

  return (
    <div className="w-full z-50 bg-secondary-light shadow px-4 md:px-6 py-1 flex items-center justify-between">
      {/* Left - Icon + Title */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <InfoIcon size={20} weight="bold" className="text-main" />
        <span className="text-[15.959px] text-main font-semibold">
          {t('alert.important')}
        </span>
      </div>

      {/* Middle - Slider */}
      <div className="flex-1 mx-4 overflow-hidden">
        <Slider {...settings}>
          {alerts.map((alert, index) => (
            <div key={index} className="py-1">
              <span
                onClick={() => {
                  router.push('/travel-update');
                }}
                className={`${isArabic ? 'text-right ' : 'text-left'} block text-[15.959px] text-[#000] font-normal underline underline-offset-2 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis`}
              >
                {alert}
              </span>
            </div>
          ))}
        </Slider>
      </div>

      {/* Right - Close */}
      <button
        onClick={() => setIsVisible(false)}
        className="text-main hover:text-black transition cursor-pointer flex-shrink-0"
        aria-label="Close Alert"
      >
        <XIcon size={20} weight="bold" />
      </button>
    </div>
  );
}
