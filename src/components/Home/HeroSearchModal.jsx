'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { FaPlaneDeparture, FaMobileAlt, FaUserFriends, FaCalendarAlt } from 'react-icons/fa';

import FlyingStart from '../SearchTabs/FlyingStart';
import Destinations from '../SearchTabs/Destinations';
import Guests from '../SearchTabs/Guests';
import TravelWhen from '../SearchTabs/TravelWhen';
import SearchTabs from './SearchTabs';
import Button from '../Ui/Button';
import { useFormik } from 'formik';
import useIsMobile from '@/hooks/useIsMobile';
import { toast } from 'sonner';
import cities from '@/util/cities';
import { FaPlaneArrival } from "react-icons/fa";

export default function HeroSearchModal({ isOpen, onClose, activeTap }) {
    const isTab = useIsMobile('1024')

    const [activeTab, setActiveTab] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    // Prevent hydration errors
    useEffect(() => {
        setHasMounted(true);
    }, []);
    function getTabHeight(tabIndex) {
        switch (tabIndex) {
            case 0:
                return 'h-80'; // Flying Start
            case 1:
                return 'h-80'; // Destination
            case 2:
                return 'h-80'; // Guests
            case 3:
                return 'h-120'; // Travel When
            default:
                return 'h-64';
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');     // ensures 2 digits
        const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-based
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const formik = useFormik({
        initialValues: {
            source: '',
            destination: '',
            adults: 1,
            children: 0,
            infants: 0,
            dateStart: '',
            dateEnd: '',
            type: activeTap // one way OR round trip
        },
        onSubmit: (values) => {
            const {
                source,
                destination,
                dateStart, // e.g., '2025-06-11'
                dateEnd,    // e.g., '2025-06-12'
                adults,
                children,
                infants, type
            } = values;
            if (!source || !destination) {
                console.error("❌ Missing required fields");
                alert("Please complete all required fields.");
                return;
            }

            // Format dates
            const formattedDeparture = formatDate(dateStart);
            const formattedReturn = type === 1 ? formatDate(dateEnd) : '';
            const flightType = type === 0 ? 'Y' : 'B'
            console.log('formattedDeparture', formattedDeparture);
            console.log('formattedReturn', formattedReturn);
            // https://reservations.chamwings.com/service-app/ibe/reservation.html#/fare/en/USD/SY/DAM/KWI/11-06-2025/12-06-2025/1/0/0/Y///
            // Build URL
            const searchUrl = `https://reservations.flycham.com/service-app/ibe/reservation.html#/fare/en/USD/SY/${source}/${destination}/${formattedDeparture}/${formattedReturn}/${adults}/${children}/${infants}/Y///`;

            // Open in new tab
            window.open(searchUrl, '_blank');
        }



    });

    const tabs = [
        {
            id: 0,
            title: 'Flying From',
            subtitle: cities?.find((c) => c.value === formik.values.source)?.name,
            icon: FaPlaneDeparture,
            render: () => <FlyingStart formik={formik} setActiveTab={setActiveTab} />,
        },
        {
            id: 1,
            title: 'Destination',
            subtitle: cities?.find((c) => c.value === formik.values.destination)?.name,
            icon: FaPlaneArrival,
            render: () => <Destinations formik={formik} setActiveTab={setActiveTab} />,
        },
        {
            id: 2,
            title: 'Guests',
            subtitle: 'Add Guest',
            icon: FaUserFriends,
            render: () => <Guests formik={formik} setActiveTab={setActiveTab} />,
        },
        {
            id: 3,
            title: 'Travel When',
            subtitle: 'Check Date',
            icon: FaCalendarAlt,
            render: () => <TravelWhen formik={formik} setActiveTab={setActiveTab} activeTap={activeTap} />,
        },
    ];
    function validateTabFields(activeTab, values) {
        if (activeTab === 0 && !values.source) {
            toast.error('Please select a departure city.', {
                description: 'You must choose a source before continuing.',
                duration: 3000
            });
            return false;
        }

        if (activeTab === 1 && !values.destination) {
            toast.error('Missing destination', {
                description: 'Please select your arrival city before continuing.',
                duration: 3000
            });
            return false;
        }

        return true;
    }


    if (!hasMounted) return null;

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                {/* Backdrop */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                </Transition.Child>

                {/* Modal Panel */}
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex min-h-full items-start justify-center p-4 pt-24 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95 -translate-y-6"
                            enterTo="opacity-100 scale-100 translate-y-0"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100 translate-y-0"
                            leaveTo="opacity-0 scale-95 -translate-y-6"
                        >
                            <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                {/* Tabs Navigation */}
                                <SearchTabs
                                    onClose={onClose}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                    tabs={tabs}
                                    formik={formik}
                                    validateTabFields={validateTabFields}
                                />

                                {/* Tab Content */}
                                <div className={`mt-4 p-3 transition-all duration-300 ${getTabHeight(activeTab)}`}>
                                    {tabs[activeTab].render()}
                                </div>


                                {/* Navigation Buttons */}
                                <div className="flex justify-end gap-4 mt-32 md:mt-6 ">
                                    <Button
                                        variant="outlined"
                                        text="Back"
                                        onClick={() => {
                                            if (activeTab === 0) {
                                                onClose()
                                            } else {
                                                setActiveTab((prev) => (prev > 0 ? prev - 1 : prev))
                                            }
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        text={activeTab === tabs.length - 1 ? 'Finish' : 'Next'}
                                        onClick={() => {
                                            if (!validateTabFields(activeTab, formik.values)) return;

                                            activeTab === tabs.length - 1
                                                ? formik.handleSubmit()
                                                : setActiveTab((prev) => prev + 1);
                                        }}

                                    />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
