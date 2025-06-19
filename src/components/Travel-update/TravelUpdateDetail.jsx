
export const TravelUpdateDetail = () => {
  return (
    <div className="w-full  mx-auto px-2 py-4">
      <div className="mb-6">
        <h1 className="text-[32px] text-[#282826] font-bold mb-1 ">
          Flight suspensions - Iraq, Jordan, Lebanon, and Iran
        </h1>

        <div className="flex items-center text-[13.96px] text-[#5F5F5C] mb-6 ">
          Last updated: 15 June 2025, 06:38 Dubai (GMT+4)
        </div>

        <h2 className="text-[24px] text-black font-semibold mb-4 ">
          Suspended Routes Overview
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 bg-[#F5F5F5] p-4 rounded-md">
            <h3 className="text-[20px] text-[#1B1F23] font-medium mb-3 ">
              Fly Cham Rout
            </h3>
            <ul className="space-y-2 text-[#1B1F23] text-[16px] leading-6 ">
              <li>
                Jordan (Amman) and Lebanon (Beirut) <br />
                <span className="block">Until and including Sunday 22 June 2025</span>
              </li>
              <li>
                Iraq (Baghdad) and Syria (Damascus) <br />
                <span className="block">Until and including Sunday 29 June 2025</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 bg-[#FEF6E7] p-4 rounded-md border border-[#F5E6C8]">
            <h3 className="text-[20px] text-[#1B1F23] font-medium mb-3 ">
              Important Notice
            </h3>
            <p className="text-[#1B1F23] text-[16px] leading-6 ">
              Customers connecting through Dubai with final destinations in Iraq, Iran, Jordan, Lebanon, and customers with onward connections to suspended destinations will not be accepted for travel at their point of origin until further notice.
            </p>
          </div>
        </div>

        <h2 className="text-[24px] text-[#1B1F23] font-semibold mb-4 ">
          What You Need to Know
        </h2>

        <div className="mb-6">
          <h3 className="text-[18px] text-[#282826] font-medium mb-2 ">
            Rebooking Process
          </h3>
          <p className="text-[#3E3E3B] text-[16px] leading-6 ">
            Customers impacted by flight cancellations must contact their travel agency for rebooking. If booked directly with Emirates, please use our contact channels below.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-[18px] text-[#282826] font-medium mb-2 ">
            Flight Status Updates
          </h3>
          <p className="text-[#3E3E3B] text-[16px] leading-6 ">
            Customers departing or arriving at Dubai International Airport are advised to check their flight status on emirates.com for the latest information.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <button className="flex-1 px-6 py-3 bg-[#054E72] text-white rounded-md font-bold text-[14px] ">
            Check Flight Status
          </button>
          <button className="flex-1 px-6 py-3 border border-[#054E72] text-[#054E72] rounded-md font-bold text-[14px] ">
            Manage Your Booking
          </button>
          <button className="flex-1 px-6 py-3 border border-[#054E72] text-[#054E72] rounded-md font-bold text-[14px] ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};