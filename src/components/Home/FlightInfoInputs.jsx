import { CalendarBlank, UsersThree } from "@phosphor-icons/react";

const FlightInfoInputs = () => {
    const inputStyle = "flex items-start gap-2 bg-[#F5F5F4] rounded-xl px-6 py-3 w-full";

    return (
        <div className="flex flex-col gap-3 w-full">
            {/* Dates */}
            <div className="flex gap-3">
                {/* Departure */}
                <div className={inputStyle}>
                    <CalendarBlank size={20} className="text-gray-500 mt-[2px]" />
                    <div>
                        <p className="text-xs text-gray-400 font-medium">Departure</p>
                        <p className="text-sm text-[#1E1E1E] font-medium">Select date</p>
                    </div>
                </div>

                {/* Return */}
                <div className={inputStyle}>
                    <CalendarBlank size={20} className="text-gray-500 mt-[2px]" />
                    <div>
                        <p className="text-xs text-gray-400 font-medium">Return</p>
                        <p className="text-sm text-[#1E1E1E] font-medium">Select date</p>
                    </div>
                </div>
            </div>

            {/* Passengers & Class */}
            <div className={inputStyle}>
                <UsersThree size={20} className="text-gray-500 mt-[2px]" />
                <div>
                    <p className="text-xs text-gray-400 font-medium">Passengers & Class</p>
                    <p className="text-sm text-main font-medium">Guest X 1, Economy</p>
                </div>
            </div>
        </div>
    );
};

export default FlightInfoInputs;
