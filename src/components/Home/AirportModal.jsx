import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import StepBar from "./StepBar";
import SearchInput from "./SearchInput";
import AirportList from "./AirportList";
import Guests from "./Guests";
import StepWrapper from "./StepWrapper";
import useCities from "@/hooks/useCities";
import Dates from "./widget/Dates/Dates";

const AirportModal = ({minMonth,setMinMonth, currentMonth, setCurrentMonth, handleDateSelect, isOpen, onClose, formik, search, setSearch, filteredSourceCities, filteredDestenationCities, stepsData, handleClick }) => {









    const renderStepComponent = () => {
        switch (formik.values.type) {
            case 0:
                return (
                    <>
                        <SearchInput search={search} setSearch={setSearch} onClose={onClose} placeholder="Search for airport or city" formik={formik} type="source" />
                        <AirportList cities={filteredSourceCities} formik={formik} type="source" />
                    </>

                );
            case 1:
                return (
                    <>
                        <SearchInput search={search} setSearch={setSearch} onClose={onClose} placeholder="To" type="destination" />
                        <AirportList cities={filteredDestenationCities} formik={formik} type="destination" />
                    </>
                );
            case 2:
                return (<Guests formik={formik} />)


            case 3:
                return (
                    <Dates formik={formik}
            minMonth={minMonth}
                setMinMonth={setMinMonth}
                        setCurrentMonth={setCurrentMonth}
                        currentMonth={currentMonth}
                        handleDateSelect={handleDateSelect} />
                )

            default:
                return null;
        }
    };

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-[#0000009D]" />
                </Transition.Child>

                <div className="fixed inset-0 flex items-start justify-center mt-24 px-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-[68rem] rounded-2xl shadow-xl ">

                            <StepBar
                                onClose={onClose}
                                stepsData={stepsData}
                                formik={formik}
                                handleClick={handleClick}

                            />
                            <StepWrapper formik={formik}
                                onClose={onClose}

                            >
                                {renderStepComponent()}
                            </StepWrapper>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default AirportModal;


