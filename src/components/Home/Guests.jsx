import React from "react";
import { Plus, Minus, PlusCircle } from "@phosphor-icons/react";

const GUEST_OPTIONS = [
    { label: "Adults", sub: "+12 Years", key: "adults" },
    { label: "Children", sub: "2 - 11 years", key: "children" },
    { label: "Infants", sub: "Under 2 years", key: "infants" },
];

const CLASS_OPTIONS = ["Economy", "Business"];

const Guests = ({ formik }) => {
    const handleGuestChange = (key, delta) => {
        const currentValue = formik.values[key];

        // Prevent adults from going below 1
        if (key === "adults") {
            const newValue = Math.max(1, currentValue + delta);
            formik.setFieldValue("adults", newValue);
            return;
        }

        // Prevent below 0 for children/infants
        const newValue = Math.max(0, currentValue + delta);
        formik.setFieldValue(key, newValue);

        // Auto-increase adults if infants > adults
        if (key === "infants" && delta > 0) {
            const futureInfants = currentValue + 1;
            if (futureInfants > formik.values.adults) {
                formik.setFieldValue("adults", futureInfants);
            }
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-between gap-12 px-2 py-6 md:px-8   bg-white rounded-2xl">
            {/* Guests Section */}
            <div className="flex-1">
                <h3 className="text-[16px] mb-4">Guests</h3>
                {GUEST_OPTIONS.map(({ label, sub, key }) => (
                    <div
                        key={key}
                        className="flex items-center justify-between bg-[#F5F5F5] px-6 py-3 rounded-xl mb-3"
                    >
                        <div>
                            <p className="text-[14px] font-semibold text-gray-800">
                                {label}
                            </p>
                            <p className="text-[12px] text-gray-500">{sub}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handleGuestChange(key, -1)}
                                disabled={
                                    key === "adults"
                                        ? formik.values[key] <= 1
                                        : formik.values[key] === 0
                                }
                                className="w-8 h-8 bg-[#D9D9D9] flex items-center justify-center rounded-[4px] disabled:opacity-50 cursor-pointer"
                            >
                                <Minus size={12} weight="bold" className="text-[#444]" />
                            </button>

                            <input
                                type="number"
                                value={formik.values[key]}
                                onChange={(e) => {
                                    const parsed = parseInt(e.target.value) || 0;
                                    const value =
                                        key === "adults" ? Math.max(1, parsed) : Math.max(0, parsed);
                                    formik.setFieldValue(key, value);
                                }}
                                className="w-10 h-8 text-center border border-gray-400 rounded-md text-sm font-medium focus:outline-none custom-number-input"
                                style={{
                                    appearance: "textfield",
                                    WebkitAppearance: "none",
                                    MozAppearance: "textfield",
                                    textAlign: "center",
                                }}
                            />

                            <button
                                onClick={() => handleGuestChange(key, 1)}
                                className=" w-8 h-8 bg-[#003A59] flex items-center justify-center rounded-[6px] cursor-pointer"
                            >
                                <Plus size={12} weight="bold" className="text-white" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Class & Promo Section */}
            <div className="flex-1">
                <h3 className="text-[16px] mb-4">Class</h3>
                {CLASS_OPTIONS.map((option) => (
                    <label
                        key={option}
                        className="flex items-center justify-between bg-[#F5F5F5] px-6 py-[14px] rounded-xl mb-3 cursor-pointer"
                    >
                        <span className="text-[14px] text-gray-800 font-medium">
                            {option}
                        </span>
                        <input
                            type="radio"
                            name="class"
                            checked={formik.values.class === option}
                            onChange={() => formik.setFieldValue("class", option)}
                            className="form-radio accent-[#003A59]"
                        />
                    </label>
                ))}

                <div className="mt-7 relative w-full group">
                    {/* Icon on the left */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-[#003A59] pointer-events-none transition-opacity duration-200 group-focus-within:opacity-0">
                        <PlusCircle size={16} weight="bold" />
                    </span>

                    {/* Label */}
                    <label
                        htmlFor="promoCodeInput"
                        className={`absolute left-7 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 transition-all 
      group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-[#003A59]
      ${formik.values.promoCode ? 'top-0 text-xs text-[#003A59]' : ''}`}
                    >
                        Promo Code
                    </label>

                    {/* Input */}
                    <input
                        id="promoCodeInput"
                        type="text"
                        value={formik.values.promoCode}
                        onChange={(e) => formik.setFieldValue("promoCode", e.target.value)}
                        className="w-full pl-7 pr-2 pt-5 pb-1 border-b-2 border-gray-300 focus:border-[#003A59] outline-none text-sm text-gray-800 placeholder-transparent"
                        placeholder="Promo Code"
                    />
                </div>



            </div>
        </div>
    );
};

export default Guests;
