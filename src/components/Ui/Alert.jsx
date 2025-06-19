'use client';

import { Info } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function ImportantAlert() {
  const { t } = useTranslation();

  return (
    <div className="left-0 top-0 w-full z-50 flex flex-col md:flex-row md:items-center justify-between bg-secondary-light px-4 md:px-6 py-2 gap-2 shadow">
      <div className="flex flex-wrap items-center gap-2 text-[13.964px] text-[#000]">
        <Info size={20} color="#26485B" />
        <span className="text-[15.959px] text-main font-semibold">
          {t('alert.important')}
        </span>
        <span className="text-[#000] font-normal">
          {t('alert.message')}
        </span>
      </div>

      <Link
        href="/travel-update"
        className="text-[15.959px] font-semibold text-main underline underline-offset-2"
      >
        {t('alert.learn_more')}
      </Link>
    </div>
  );
}
