import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import StepBar from "./StepBar";
import SearchInput from "./SearchInput";
import AirportList from "./AirportList";
import { AirplaneTakeoff, AirplaneLanding, Users, Calendar, X, Check, CalendarBlank } from "@phosphor-icons/react";
import Guests from "./Guests";
import StepWrapper from "./StepWrapper";
import Dates from "./Dates";
import useCities from "@/hooks/useCities";

const AirportModal = ({ isOpen, onClose, formik }) => {
    const [search, setSearch] = useState("");
    const cities = useCities();
    const tripType = formik.values.tripType


    const getCityString = (val) => {
        const city = cities?.find(c => c.value === val);
        return city ? city.name + " , " + city.value : '';
    };
    const getGuestSummary = () => {
        const { adults, children, infants } = formik.values;

        const parts = [];
        if (adults !== 1 || children !== 0 || infants !== 0) {
            if (adults > 0) parts.push(`${adults}ADT`);
            if (children > 0) parts.push(`${children}CHD`);
            if (infants > 0) parts.push(`${infants}INF`);
            return parts.join(', ');
        }

        return 'Add Guest';
    };

    const source = getCityString(formik.values.source);
    const destination = getCityString(formik.values.destination);

    const stepsData = [
        { icon: <AirplaneTakeoff size={16} />, title: "Flying from", value: source, id: 0 },
        { icon: <AirplaneLanding size={16} />, title: "Flying to", value: destination, id: 1 },
        { icon: <Users size={16} />, title: "Guests", value: getGuestSummary(), id: 2 },
        { icon: <CalendarBlank size={16} />, title: "Travel when", value: "Check Date", id: 3 },
    ];
    const normalizedSearch = search.toLowerCase();
    const isDAMorALP = ['DAM', 'ALP'].includes(formik.values.source);

    const cityMatches = ({ name, label }) =>
        `${name} ${label}`.toLowerCase().includes(normalizedSearch);

    const filteredSourceCities = cities.filter(cityMatches);

    const filteredDestenationCities = cities.filter(({ value, ...rest }) =>
        cityMatches(rest) &&
        (isDAMorALP ? !['DAM', 'ALP'].includes(value) : ['DAM', 'ALP'].includes(value))
    );


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
                    <Dates formik={formik} />
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


