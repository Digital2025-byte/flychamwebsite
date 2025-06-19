'use client'
import { AirplaneTilt, Clock } from "phosphor-react";

export const TravelUpdateDetail = () => {



  const SuspendedRoutesCard = () => {
    return (
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Left Card */}
        <div className="flex-1 bg-[#F5F5F5] p-6 rounded-xl">
          <h3 className="text-[20px] text-[#1B1F23] font-semibold mb-4">
            Fly Cham Rout
          </h3>

          <ul className="space-y-4 text-[#1B1F23] text-[16px] leading-6">
            <li className="flex items-start gap-3">
              <AirplaneTilt size={20} color="#054E72" className="mt-1" />
              <div>
                <div>Jordan (Amman) and Lebanon (Beirut)</div>
                <div className="text-[#5F5F5C] text-[15px] mt-1 ml-5">
                  Until and including Sunday 22 June 2025
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <AirplaneTilt size={20} color="#054E72" className="mt-1" />
              <div>
                <div>Iraq (Baghdad) and Syria (Damascus)</div>
                <div className="text-[#5F5F5C] text-[15px] mt-1 ml-5">
                  Until and including Sunday 29 June 2025
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Card */}
        <div className="flex-1 bg-[#FEF6E7] p-6 rounded-xl border border-[#F5E6C8]">
          <h3 className="text-[20px] text-[#1B1F23] font-semibold mb-4">
            Important Notice
          </h3>

          <p className="text-[#1B1F23] text-[16px] leading-6">
            Customers connecting through Dubai with final destinations in Iraq,
            Iran, Jordan, Lebanon, and customers with onward connections to
            suspended destinations will not be accepted for travel at their point
            of origin until further notice.
          </p>
        </div>
      </div>
    );
  }
  const FlexibleOptionsNotice = () => {
    return (
      <div className="mb-8">
        <p className="text-[#054E72] text-[18px] font-medium mb-4">
          Passengers affected by flight cancellations who are scheduled to travel between
          June 13th and June 22nd 2025, are entitled to the following flexible options:
        </p>
<ul className="pl-5 space-y-2 text-[#000] text-[16px] leading-[24px]">
  <li className="relative before:content-['-'] before:absolute before:left-0 before:text-[#000] pl-4">
    Free of charge change without collecting penalties and difference in fare
  </li>
  <li className="relative before:content-['-'] before:absolute before:left-0 before:text-[#000] pl-4">
    Free rerouting to alternative destinations within the same region
  </li>
  <li className="relative before:content-['-'] before:absolute before:left-0 before:text-[#000] pl-4">
    Rerouting for transit passengers via Amman with other carriers, subject to availability.
  </li>
  <li className="relative before:content-['-'] before:absolute before:left-0 before:text-[#000] pl-4">
    Free of charge change without collecting penalties and difference in fare
  </li>
  <li className="relative before:content-['-'] before:absolute before:left-0 before:text-[#000] pl-4">
    Change is permitted for travel on/before 15th July 2025.
  </li>
</ul>

      </div>
    );
  }
  const ActionButtons = () => {
    return (
      <div className="flex flex-col md:flex-row gap-3">
        <button className="flex-1 px-6 py-3 bg-[#054E72] text-white rounded-md font-bold text-[14px]">
          Check Flight Status
        </button>
        <button className="flex-1 px-6 py-3 border border-[#054E72] text-[#054E72] rounded-md font-bold text-[14px]">
          Manage Your Booking
        </button>
        <button className="flex-1 px-6 py-3 border border-[#054E72] text-[#054E72] rounded-md font-bold text-[14px]">
          Contact Us
        </button>
      </div>
    );
  }

  const WhatYouNeedToKnow = () => {
    return (
      <div className="mb-8">
        <h2 className="text-[24px] text-[#1B1F23] font-semibold mb-4">
          What You Need to Know
        </h2>

        <div className="mb-6">
          <h3 className="text-[18px] text-[#282826] font-medium mb-2">
            Rebooking Process
          </h3>
          <p className="text-[#3E3E3B] text-[16px] leading-6">
            Customers impacted by flight cancellations must contact their travel agency for rebooking. If booked directly with Emirates, please use our contact channels below.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-[18px] text-[#282826] font-medium mb-2">
            Flight Status Updates
          </h3>
          <p className="text-[#3E3E3B] text-[16px] leading-6">
            Customers departing or arriving at Dubai International Airport are advised to check their flight status on emirates.com for the latest information.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full  mx-auto px-2 py-4">
      <div className="mb-6">
        <h1 className="text-[32px] text-[#282826] font-bold mb-1 ">
          Flight suspensions - Iraq, Jordan, Lebanon, and Iran
        </h1>

        <div className="flex items-center text-[13.96px] text-[#5F5F5C] mb-6 ">
          <Clock size={20} color="#5F5F5C" className="mr-2" />

          Last updated: 15 June 2025, 06:38 Dubai (GMT+4)
        </div>

        <h2 className="text-[24px] text-black font-semibold mb-4 ">
          Suspended Routes Overview
        </h2>

        <SuspendedRoutesCard />
        <FlexibleOptionsNotice />


        <WhatYouNeedToKnow />
        <ActionButtons />
      </div>
    </div>
  );
};