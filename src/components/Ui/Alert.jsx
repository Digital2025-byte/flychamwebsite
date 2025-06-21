'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { InfoIcon, XIcon } from '@phosphor-icons/react';

export default function ImportantAlert() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  if (!isVisible) return null;

  return (
    <div className="relative left-0 top-0 w-full z-50 flex flex-col md:flex-row md:items-center justify-between bg-secondary-light px-4 md:px-6 py-2 gap-2 shadow">
      {/* Alert content */}
      <div className="flex flex-wrap items-center gap-1 text-[13.964px] text-[#000]">
        <InfoIcon size={20} weight="bold" className="text-main" />
        <span className="text-[15.959px] text-main font-semibold">
          {t('alert.important')}
        </span>
        <span
          onClick={() => {
            router.push('/travel-update');
          }}
          className="text-[#000] font-normal underline underline-offset-2 cursor-pointer"
        >
          {t('alert.message')}
        </span>
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="text-main hover:text-black transition cursor-pointer"
        aria-label="Close Alert"
      >
        <XIcon size={20} weight="bold" />
      </button>
    </div>
  );
}
