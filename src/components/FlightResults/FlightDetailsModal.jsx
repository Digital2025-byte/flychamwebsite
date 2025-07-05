'use client';
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Usb, WifiHigh, TelevisionSimple, CookingPot, MonitorPlay, Coffee, ArrowRight, Clock } from '@phosphor-icons/react';
import Image from 'next/image';
import timeline from "@/assets/images/timeline.png";
import tabicon from "@/assets/images/tabicon.png";

const flightData = [
    {
        type: 'segment',
        departureTime: '18:00',
        arrivalTime: '18:30',
        departureAirport: 'Aleppo International Airport (ALP)',
        arrivalAirport: 'Damascus International Airport (DAM)',
        flightCode: 'XH700',
        duration: '30m',
        amenities: ['USB Charging', 'WIFI', 'Entertainment', 'Optional Meal'],
    },
    {
        type: 'transit',
        note: '1h transit in Damascus',
    },
    {
        type: 'segment',
        departureTime: '19:00',
        arrivalTime: '21:30',
        departureAirport: 'Damascus International Airport (DAM)',
        arrivalAirport: 'Dubai International Airport (DXB)',
        flightCode: 'XH700',
        duration: '2h 30m',
        amenities: ['USB Charging', 'WIFI', 'Entertainment', 'Optional Meal'],
    }
];

const Amenities = ({ amenities }) => {
    const iconMap = {
        'USB Charging': <Usb size={20} />,
        'WIFI': <WifiHigh size={20} />,
        'Entertainment': <MonitorPlay size={20} />,
        'Optional Meal': <Coffee size={20} />
    };

    return (
        <div className="bg-[#a6cfe052] rounded-md p-3 mb-2 max-w-[291px]">
            <ul className="text-[#374151] space-y-2">
                {amenities.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                        {iconMap[item]} <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const FlightDetailsModal = ({ isOpen, onClose }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child as={Fragment}>
                    <div className="fixed inset-0 bg-[#00000095]" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child as={Fragment}>
                            <Dialog.Panel className="w-[610px] rounded-2xl bg-white p-6 shadow-xl">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-4">
                                    <Dialog.Title className="text-[18px] font-semibold text-[#111827]">
                                        Flight details
                                    </Dialog.Title>
                                    <button onClick={onClose}><X size={20} /></button>
                                </div>

                                {/* Route Info */}
                                <div className="flex items-center gap-2 text-sm font-medium text-main mb-1">
                                    <span>Damascus</span>
                                    <span className="text-gray-400"><ArrowRight size={32} />

                                    </span>
                                    <span>Dubai</span>
                                </div>
                                <p className="text-[#3E3E3B] text-sm">Thu, 10 Jul 2025</p>
                                <p className="text-[#3E3E3B] text-sm mb-4">
                                    Total duration 3h 0m <span className="text-[#B00] font-medium">1stop</span>
                                </p>

                                {/* Segments and Transit */}
                                {flightData.map((item, index) => {
                                    if (item.type === 'segment') {
                                        return (
                                            <div key={index} className={`flex items-start gap-3 ${index !== flightData.length - 1 ? 'mb-6' : ''}`}>
                                                {/* Times */}
                                                <div className="flex flex-col text-sm text-[#111827] font-medium w-[50px]">
                                                    <span>{item.departureTime}</span>
                                                    <div className="mt-[52px] text-xs text-gray-500">{item.duration}</div>
                                                    <span className="mt-1">{item.arrivalTime}</span>
                                                </div>

                                                {/* Timeline */}
                                                <div className="flex flex-col items-center">
                                                    <Image src={timeline} alt="timeline" className="w-[11px] h-full" />
                                                </div>

                                                {/* Content */}
                                                <div className="flex flex-col gap-[12px] flex-1 text-sm">
                                                    <p className="font-medium mb-1 text-[#282826]">{item.departureAirport}</p>
                                                    <p className="text-[#6B7280] mb-2 flex items-center gap-1">
                                                        <Image src={tabicon} alt="flight icon" width={16} height={16} />
                                                        {item.flightCode}
                                                    </p>

                                                    <Amenities amenities={item.amenities} />
                                                    <p className="mt-1">{item.arrivalAirport}</p>
                                                </div>
                                            </div>
                                        );
                                    }

                                    if (item.type === 'transit') {
                                        return (
                                            <div key={index} className="text-center text-sm text-main font-regular my-6">
                                                <div className="mb-2 flex-grow border-t border-gray-200" />

                                                <div className="inline-flex items-center gap-1">
                                                    <Clock />
                                                    {item.note}
                                                </div>
                                                <div className=" mt-2 flex-grow border-t border-gray-200" />

                                            </div>
                                        );
                                    }

                                    return null;
                                })}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default FlightDetailsModal;
