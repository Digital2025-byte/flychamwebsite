'use client';
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Usb, WifiHigh, TelevisionSimple, CookingPot, MonitorPlay, Coffee, ArrowRight, Clock, MonitorPlayIcon, ForkKnife, Newspaper, ForkKnifeIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import timeline from "@/assets/images/timeline.png";
import tabicon from "@/assets/images/tabicon.png";
import useFormattedFlightTimes from '@/hooks/useFormattedFlightTimes';
import useFlightRouteDetails from '@/hooks/useFlightRouteDetails';
import FlightSegmentDetails from './FlightSegmentDetails';


const Amenities = ({ amenities }) => {
    const iconMap = {
        'Entertainment': <MonitorPlayIcon size={20} />,
        'Optional Meal': <ForkKnifeIcon size={20} />,
        'WIFI': <WifiHigh size={20} />,
        'Magazine': <Newspaper size={20} />
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

const FlightDetailsModal = ({ flight, isOpen, onClose }) => {
    const { duration, stops, flightNumber, ecoID, ecoFare, busID, busFare, departureAirport, arrivalAirport, departureTime, arrivalTime } = useFormattedFlightTimes(flight);
    const { destination, origin, date } = useFlightRouteDetails()
    console.log('flight', flight);


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

                                {flight?.common_info?.segments?.map((s, index) => (
                                    <FlightSegmentDetails
                                        key={index}
                                        origin={{ city: s.origin_city }}
                                        destination={{ city: s.destination_city }}
                                        date={date}
                                        duration={s.duration} // Prefer segment duration if available
                                        stops={stops} // Or optionally use s.stops if segment-specific
                                        departureTime={s.departure_time}
                                        arrivalTime={s.arrival_time}
                                        departureAirport={s.origin_name}
                                        arrivalAirport={s.destination_name}
                                        flightNumber={s.flight_number}
                                    />
                                ))}



                                {/* Segments and Transit */}
                                {/* {flightData.map((item, index) => {
                                    if (item.type === 'segment') {
                                        return (
                                            <div key={index} className={`flex items-start gap-3`}>

                                                <div className="flex flex-col text-sm text-[#111827] font-medium w-[50px]">
                                                    <span>{departureTime}</span>
                                                    <div className="mt-[52px] text-xs text-gray-500">{duration}</div>
                                                    <span className="mt-1">{arrivalTime}</span>
                                                </div>

                                                <div className="flex flex-col items-center">
                                                    <Image src={timeline} alt="timeline" className="w-[11px] h-full" />
                                                </div>

                                                <div className="flex flex-col gap-[12px] flex-1 text-sm">
                                                    <p className="font-medium mb-1 text-[#282826]">{departureAirport}</p>
                                                    <p className="text-[#6B7280] mb-2 flex items-center gap-1">
                                                        <Image src={tabicon} alt="flight icon" width={16} height={16} />
                                                        {flightNumber}
                                                    </p>

                                                    <Amenities amenities={['USB Charging', 'WIFI', 'Entertainment', 'Optional Meal']} />
                                                    <p className="mt-1">{arrivalAirport}</p>
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
                                })} */}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default FlightDetailsModal;
