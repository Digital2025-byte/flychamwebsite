import React from "react";

const StepFooterBar = ({ activeTab, isNextDisabled, getTripDuration, handleReset, handleStep }) => {
    const showExtras = activeTab === 3;
    const tripDuration = getTripDuration();

    return (
        <div className={`flex flex-col md:flex-row md:items-center ${!showExtras ? "justify-end" : "justify-between"} gap-4`}>
            {/* Left Side - Trip Duration + Reset */}
            <div
                className={`flex flex-col items-start gap-4 text-sm text-gray-600 min-h-[48px] transition-opacity duration-300`}
                style={{ opacity: showExtras && tripDuration ? 1 : 0 }}
            >
                <span className="text-black">
                    {tripDuration || '‎'}
                </span>
                <button
                    onClick={handleReset}
                    className="cursor-pointer text-main text-sm hover:text-[#002233]"
                    disabled={!showExtras}
                >
                    Reset
                </button>
            </div>

            {/* Right Side - Navigation Buttons */}
            <div className="flex flex-start items-center gap-6">
                <button
                    onClick={() => handleStep("back")}
                    className="px-6 py-2 border border-main text-main rounded-md text-sm font-medium hover:bg-gray-50"
                >
                    {activeTab === 0 ? "Close" : "Back"}
                </button>
                <button
                    onClick={() => handleStep("next")}
                    disabled={isNextDisabled()}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-opacity duration-200 ${
                        isNextDisabled()
                            ? "bg-gray-400 text-white cursor-not-allowed"
                            : "bg-[#B59C6D] text-white hover:opacity-90"
                    }`}
                >
                    {activeTab === 3 ? "Continue" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default StepFooterBar;
