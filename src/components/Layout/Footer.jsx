'use client';

import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo.webp';
import {
    FaInstagram, FaTiktok, FaYoutube, FaFacebookF, FaLinkedinIn, FaTelegramPlane
} from 'react-icons/fa';
import {
    PiThreadsLogo
} from 'react-icons/pi';
import { FaXTwitter } from "react-icons/fa6";
import pattern from '@/assets/images/pattern.webp';
const Footer = () => {
    const sections = [
        {
            title: 'About Fly Cham',
            links: [
                'Our Story', 'Our Mission', 'Our Vision', 'Our Values',
                'Our Responsibility', 'Our Fleet', 'Media Center', 'Chairman’s Message'
            ]
        },
        {
            title: 'Book Flights',
            links: [
                'Search A Flight', 'Flight Schedules', 'Hotel Booking', 'Car Rental',
                'Visa Information', 'Group Travel', 'Request Private Flights'
            ]
        },
        {
            title: 'Our Destinations Network',
            links: [
                'Domestic Destinations', 'International Destinations', 'Indirect Destinations',
                'Holidays', 'Discover Syria', 'Tourism Programs', 'Family Holidays Packages', 'Honeymoon Packages'
            ]
        },
        {
            title: 'About Loyalty Program',
            links: [
                'About The Program', 'Join The Program',
                'Terms And Conditions'
            ]
        },
        {
            title: 'Travel Experience',
            links: [
                'Before Travel', 'At The Airport', 'On Board', 'Additional Services',

            ]

        },
        {
            title: 'Help',
            links: [
                'Contact Us', 'Inquiries & Complaints', 'Our Sales Offices',
                'Our Agents Worldwide', 'Join As a Partner', 'FAQs'
            ]
        }
    ];

    return (
        <div className=" relative  bg-main text-white">
            <footer className=" w-[75%] xl:w-[65%] mx-auto pt-4 pb-20 md:py-12">
                {/* CTA */}
                {/* <div className=" hidden  xl:flex  flex-wrap justify-between items-center gap-6  pb-8">
                    <div className='flex items-start gap-8'>

                        <div className="text-sm font-medium max-w-xs">
                            Be the first to get exclusive updates on new travel destinations, special offers and holiday packages with our newsletter.
                        </div>
                        <button className=" cursor-pointer bg-secondary px-5 py-1 rounded text-sm">Button</button>
                    </div>
                    <div className='flex items-start  gap-8'>

                        <div className="text-sm font-medium max-w-xs">
                            Your feedback matters to us! We truly value hearing your feedback and opinion.
                        </div>
                        <button className="cursor-pointer bg-secondary px-5 py-1 rounded text-sm">Button</button>
                    </div>

                </div> */}

                {/* Main Footer */}
                <div className="my-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
                    {/* Logo */}
                    <div className="cursor-pointer">
                        <Image src={logo} alt="Fly Cham" width={180} height={40} />
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-2 mt-6 md:mt-0 text-xl">
                        {[
                            <PiThreadsLogo
                                onClick={() => {
                                    window.open(
                                        'https://www.threads.com/@fly.cham',
                                        '_blank'
                                    );
                                }}
                            />,
                            //  <FaTiktok />
                            //  ,
                            <FaInstagram
                                onClick={() => {
                                    window.open(
                                        'https://www.instagram.com/fly.cham/',
                                        '_blank'
                                    );
                                }}
                            />, <FaFacebookF onClick={() => {
                                window.open(
                                    'https://www.facebook.com/people/%D9%81%D9%84%D8%A7%D9%8A-%D8%B4%D8%A7%D9%85-Fly-Cham/61575817032233/',
                                    '_blank'
                                );
                            }} />,
                            // <FaYoutube />
                            // ,
                            <FaLinkedinIn
                                onClick={() => {
                                    window.open(
                                        'https://www.linkedin.com/company/fly-cham/',
                                        '_blank'
                                    );
                                }}
                            />,
                            <FaXTwitter
                                onClick={() => {
                                    window.open(
                                        'https://x.com/fly_cham',
                                        '_blank'
                                    );
                                }}
                            />,
                            //  <FaTelegramPlane />
                        ].map((Icon, index) => (
                            <div

                                key={index}
                                className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border border-[#D6B680] text-[#D6B680] hover:opacity-80 transition"
                            >
                                {Icon}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Sections */}

                <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-5 md:grid-cols-4  gap-4">


                    {sections.map((section, idx) => (
                        <div key={idx}>
                            <h4 className="font-semibold mb-3 text-secondary">{section.title}</h4>
                            <ul className="space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i} className={link === 'Holidays' ? '  font-semibold mt-2 text-secondary' : '  text-[#D2D1D3]'}>
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


                {/* Footer Bottom */}
                <div className="text-center md:text-start mt-10 border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between text-xs text-white/70">
                    <p>© All Rights Reserved. Fly Cham 2025</p>
                    <div className="flex gap-4 mt-2 md:mt-0 justify-center">
                        <span>Site Map</span>
                        <span>Privacy Policy</span>
                        <span>Terms and Conditions</span>
                    </div>
                </div>
                <Image
                    src={pattern}
                    alt="Background Pattern"
                    className="absolute opacity-30 bottom-0 right-0 w-[280px] md:w-[400px] pointer-events-none select-none z-0"
                    aria-hidden="true"
                />
            </footer>
        </div>
    );
};

export default Footer;
