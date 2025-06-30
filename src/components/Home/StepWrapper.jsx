import React from "react";

const StepWrapper = ({ children, formik, onClose }) => {
    const activeTab = formik.values.type;

    const handleStep = (direction) => {
        if (direction === "back") {
            if (activeTab === 0) {
                onClose?.(); // Close modal
            } else {
                formik.setFieldValue("type", activeTab - 1);
            }
        } else if (direction === "next") {
            if (activeTab === 3) {
                alert("finish");
            } else {
                formik.setFieldValue("type", activeTab + 1);
            }
        }
    };

    const isNextDisabled = () => {
        const { source, destination, adults, dateStart, dateEnd, tripType } = formik.values;
        switch (activeTab) {
            case 0:
                return !source;
            case 1:
                return !destination;
            case 3:
                if (tripType === 'roundtrip') return !(dateStart && dateEnd);
                return !dateStart;
            default:
                return false;
        }
    };

    // Calculate trip duration
    const getTripDuration = () => {
        const { dateStart, dateEnd, tripType } = formik.values;
        if (tripType === "roundtrip" && dateStart && dateEnd) {
            const start = new Date(dateStart);
            const end = new Date(dateEnd);
            const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
            return diff > 0 ? `${diff} days your trip` : '';
        }
        return '';
    };

    const handleReset = () => {
        formik.setFieldValue("dateStart", null);
        formik.setFieldValue("dateEnd", null);
    };

    return (
        <div className="bg-white rounded-2xl shadow overflow-hidden px-6 pt-3 pb-6">
            {children}

            {/* Divider */}
            <div className="w-full my-4 h-[1px] bg-gray-200" />

            {/* Footer Bar */}
            <div className={`flex flex-col md:flex-row md:items-center ${activeTab !== 3 ? "justify-end" : "justify-between"} gap-4`}>
                {activeTab === 3 &&

                    <div className="flex flex-col items-start gap-4 text-sm text-gray-600">
                        {getTripDuration() && (
                            <span className="text-black">{getTripDuration()}</span>
                        )}
                        <button
                            onClick={handleReset}
                            className="cursor-pointer text-main  text-sm hover:text-[#002233]"
                        >
                            Reset
                        </button>
                    </div>
                }
                <div className="flex flex-start items-center gap-6">
                    {activeTab === 3 &&
                        <div className="text-sm text-gray-700">
                            <span className="mr-1">Per guest</span>
                            <span className="text-lg font-semibold underline">850</span>
                        </div>
                    }
                    <button
                        onClick={() => handleStep("back")}
                        className="px-6 py-2 border border-main text-main rounded-md text-sm font-medium hover:bg-gray-50"
                    >
                        {activeTab === 0 ? "Close" : "Back"}
                    </button>

                    <button
                        onClick={() => handleStep("next")}
                        disabled={isNextDisabled()}
                        className={`px-6 py-2 rounded-md text-sm font-medium transition-opacity duration-200 ${isNextDisabled()
                            ? "bg-gray-400 text-white cursor-not-allowed"
                            : "bg-[#B59C6D] text-white hover:opacity-90"
                            }`}
                    >
                        {activeTab === 3 ? "Continue" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StepWrapper;
