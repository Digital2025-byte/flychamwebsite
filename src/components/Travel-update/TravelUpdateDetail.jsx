'use client';
import { useTranslation } from 'react-i18next';
import { AirplaneTilt, Clock } from 'phosphor-react';

export const TravelUpdateDetail = () => {
  const { t } = useTranslation();

  const SuspendedRoutesCard = () => {
    return (
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Left Card */}
        <div className="flex-1 bg-[#F5F5F5] p-6 rounded-xl">
          <h3 className="text-[20px] text-[#1B1F23] font-semibold mb-4">
            {t('travelUpdate.suspendedRoutesTitle')}
          </h3>

          <ul className="space-y-4 text-[#1B1F23] text-[16px] leading-6">
            <li className="flex items-start gap-3">
              <AirplaneTilt size={20} color="#054E72" className="mt-1" />
              <div>
                <div>{t('travelUpdate.suspendedRoute1')}</div>
                <div className="text-[#5F5F5C] text-[15px] mt-1 ml-5">
                  {t('travelUpdate.suspendedRoute1Date')}
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <AirplaneTilt size={20} color="#054E72" className="mt-1" />
              <div>
                <div>{t('travelUpdate.suspendedRoute2')}</div>
                <div className="text-[#5F5F5C] text-[15px] mt-1 ml-5">
                  {t('travelUpdate.suspendedRoute2Date')}
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Card */}
        <div className="flex-1 bg-[#FEF6E7] p-6 rounded-xl border border-[#F5E6C8]">
          <h3 className="text-[20px] text-[#1B1F23] font-semibold mb-4">
            {t('travelUpdate.importantNoticeTitle')}
          </h3>

          <p className="text-[#1B1F23] text-[16px] leading-6">
            {t('travelUpdate.importantNoticeText')}
          </p>
        </div>
      </div>
    );
  };

  const FlexibleOptionsNotice = () => {
    const options = t('travelUpdate.flexibleOptions', { returnObjects: true });

    return (
      <div className="mb-8">
        <p className="text-[#054E72] text-[18px] font-medium mb-4">
          {t('travelUpdate.flexibleOptionsIntro')}
        </p>
        <ul className="pl-5 space-y-2 text-[#000] text-[16px] leading-[24px]">
          {options.map((item, index) => (
            <li
              key={index}
              className="relative before:content-['-'] before:absolute before:left-0 before:text-[#000] pl-4"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const ActionButtons = () => {
    return (
      <div className="flex flex-col md:flex-row gap-3">
        <button className="flex-1 px-6 py-3 bg-[#054E72] text-white rounded-md font-bold text-[14px]">
          {t('travelUpdate.buttonCheckStatus')}
        </button>
        <button className="flex-1 px-6 py-3 border border-[#054E72] text-[#054E72] rounded-md font-bold text-[14px]">
          {t('travelUpdate.buttonManageBooking')}
        </button>
        <button className="flex-1 px-6 py-3 border border-[#054E72] text-[#054E72] rounded-md font-bold text-[14px]">
          {t('travelUpdate.buttonContactUs')}
        </button>
      </div>
    );
  };

  const WhatYouNeedToKnow = () => {
    return (
      <div className="mb-8">
        <h2 className="text-[24px] text-[#1B1F23] font-semibold mb-4">
          {t('travelUpdate.whatYouNeedToKnow')}
        </h2>

        <div className="mb-6">
          <h3 className="text-[18px] text-[#282826] font-medium mb-2">
            {t('travelUpdate.rebookingProcessTitle')}
          </h3>
          <p className="text-[#3E3E3B] text-[16px] leading-6">
            {t('travelUpdate.rebookingProcessText')}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-[18px] text-[#282826] font-medium mb-2">
            {t('travelUpdate.flightStatusUpdatesTitle')}
          </h3>
          <p className="text-[#3E3E3B] text-[16px] leading-6">
            {t('travelUpdate.flightStatusUpdatesText')}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mx-auto px-2 py-4">
      <div className="mb-6">
        <h1 className="text-[32px] text-[#282826] font-bold mb-1">
          {t('travelUpdate.pageTitle')}
        </h1>

        <div className="flex items-center text-[13.96px] text-[#5F5F5C] mb-6">
          <Clock size={20} color="#5F5F5C" className="mr-2" />
          {t('travelUpdate.lastUpdated')}
        </div>

        <h2 className="text-[24px] text-black font-semibold mb-4">
          {t('travelUpdate.overviewTitle')}
        </h2>

        <SuspendedRoutesCard />
        <FlexibleOptionsNotice />
        <WhatYouNeedToKnow />
        <ActionButtons />
      </div>
    </div>
  );
};
