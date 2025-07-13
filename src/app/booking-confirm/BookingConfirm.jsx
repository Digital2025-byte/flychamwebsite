'use client'
import React from 'react';
import { EnvelopeSimple, Clock, DownloadSimple, ArrowLeft } from '@phosphor-icons/react';
import logoEn from "@/assets/images/logoEn.png"
import Image from 'next/image';
import FlightTimeInfo from '@/components/FlightResults/FlightTimeInfo';
import { useSelector } from 'react-redux';
import mask from "@/assets/images/mask.png"
import check from "@/assets/images/check.png"
import Divider from '@/components/FlightResults/FlighSelectStep/Divider';
const BookingConfirm = () => {
    const { selectedFlight } = useSelector((s) => s.flights)
    const stops = 12
    const info = [
        {
            label: "Name",
            value: "Mouayad Hawari"
        },
        {
            label: "Passengers",
            value: "2 Adult"
        },
        {
            label: "Contact",
            value: "+963 935679806"
        },
        {
            label: "Email",
            value: "moaidhawh@gmail.com"
        },
        {
            label: "Booking reference",
            value: "124606538"
        },
        {
            label: "Flight number",
            value: "XH 700"
        }
    ];

    return (
        <div

            className="w-full max-w-[1100px] mx-auto bg-white py-4 px-4 flex flex-col items-center">
            {/* icon */}
            <div

                className="flex flex-col items-center mb-10">
                <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
                    <Image src={check} />
                </div>
                <h1 className="text-2xl font-bold text-primary-1 mb-1">Booking confirmed</h1>
                <p className="text-lg  text-600">Thank you for your payment</p>
            </div>

            {/* Ticket */}
            <div
                className="  max-h-[1200px] shadow-md  rounded-[20px] overflow-hidden relative mb-6">
                {/* Top Half-Circle Cutout */}
                <div className="absolute   top-0 left-1/2 transform -translate-x-[-180px] -translate-y-1/2 w-10 h-10 bg-white rounded-b-full z-10 shadow-lg" />

                {/* Bottom Half-Circle Cutout */}
                <div className="absolute   bottom-0 left-1/2 transform -translate-x-[-180px] translate-y-1/2 w-10 h-10 bg-white] rounded-t-full z-10 shadow-lg" />


                <div className="absolute top-1/2 -left-[10px] w-5 h-5 rounded-full bg-white border transform -translate-y-1/2" />
                <div className="flex justify-between  items-start bg-100 px-3 py-4 text-primary-1  ">
                    <Image src={logoEn} />
                    <div className="flex justify-end items-center gap-2 p-[12px_15px] bg-primary-1 rounded-[8px]">
                        <span className="text-white text-xs font-semibold px-3 py-1">Business Class</span>
                    </div>

                </div>
                <div className='flex '>


                    {/* Left Section */}
                    <div className="flex flex-col bg-50 relative p-4">

                        {/* Times */}
                        <div className='flex flex-col justify-center items-start gap-4 '>
                            <div className="text-600text-sm pt-2 self-center">
                                {stops > 0 ? stops : 'Non-stop,'}
                                {10}
                            </div>
                            <FlightTimeInfo
                                flight={selectedFlight}
                                isLg={false}
                                isMd={false}
                                isXl={true}
                            />
                        </div>

                        {/* Notice */}
                        <div className="flex justify-between bg-[#A6CFE04D] rounded-lg px-2 py-3 mt-6 text-sm text-500">
                            <div className="flex items-start gap-2">
                                <EnvelopeSimple size={24} />
                                <span className='text-[12px] text-500'>We’ve sent your booking confirmation to your email</span>
                            </div>
                            <div className="border-l border-gray-300 h-5 self-center mx-4" />
                            <div className="flex items-start gap-2">
                                <Clock size={24} />
                                <span className='text-[12px] text-500'>Please arrive at the airport at least 3 hours before departure</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-1/3 bg-white  p-6 flex flex-col justify-between ">
                        <div className="absolute inset-y-0 inset-x-0 left-[69%] w-[10px] border-dashed border-l border-gray-300" />
                        <div className="grid grid-cols-1 gap-y-4 text-sm">
                            {info.reduce((acc, curr, index) => {
                                if (index % 2 === 0) {
                                    acc.push([curr]);
                                } else {
                                    acc[acc.length - 1].push(curr);
                                }
                                return acc;
                            }, []).map((pair, idx) => (
                                <div key={idx} className="grid grid-cols-2 gap-x-6">
                                    {pair.map(({ label, value }, i) => (
                                        <div key={i}>
                                            <div className="text-gray-500">{label}</div>
                                            <div className="font-medium">{value}</div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>





















            {/* Payment Summary */}
            <div className="w-full  border shadow-md border-[#FDFDFC] rounded-[20px] py-6 px-4 mb-6">
                <h3 className="text-sm font-semibold mb-4">Payment Summary</h3>
                <div className="flex justify-between text-sm mb-2 text-600">
                    <span >Base fare(x2)</span>
                    <span>USD 1700</span>
                </div>
                <div className="flex justify-between text-sm mb-2 text-600">
                    <span>Taxes & fees</span>
                    <span>USD 90</span>
                </div>
                <Divider />
                <div className="flex justify-between text-sm font-semibold text-primary-1 mb-2">
                    <span>Total Paid</span>
                    <span>USD 1790</span>
                </div>
                <div className="flex justify-between text-sm mb-2 text-700">
                    <span>Transaction ID:</span>
                    <span>TXN123456789</span>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
                <button className=" flex items-center gap-2 border border-primary-1 text-primary-1 px-5 py-2 rounded-md font-medium">
                    <ArrowLeft size={18} />
                    Back to Home Page
                </button>
                <button className="flex items-center gap-2 bg-primary-1 text-white px-5 py-2 rounded-md font-medium">
                    <DownloadSimple size={18} />
                    Download Ticket
                </button>
            </div>
        </div>
    );
};

export default BookingConfirm;
