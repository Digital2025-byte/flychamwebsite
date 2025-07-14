'use client'
import React from "react";
import StepFooterBar from "./StepFooterBar";

const StepWrapper = ({ children, formik, onClose }) => {
    const activeTab = formik.values.type;

    const handleStep = (direction) => {
        if (direction === "back") {
            if (activeTab === 0) {
                onClose?.();
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
                return tripType === 'roundtrip' ? !(dateStart && dateEnd) : !dateStart;
            default:
                return false;
        }
    };

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
            {/* <div className="w-full my-4 h-[1px] bg-gray-200" /> */}
            <StepFooterBar
                activeTab={activeTab}
                isNextDisabled={isNextDisabled}
                getTripDuration={getTripDuration}
                handleReset={handleReset}
                handleStep={handleStep}
                onClose={onClose}
                formik={formik}
            />
        </div>
    );
};

export default StepWrapper;
