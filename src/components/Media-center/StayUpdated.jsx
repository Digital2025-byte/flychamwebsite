import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiThreadsLogo } from "react-icons/pi";
import Input from "../Ui/Input";

const StayUpdated = () => {
    return (
        <section className="w-full bg-white py-12 ">
            <h2 className="text-primary-1 text-[28px] md:text-[32px]  font-bold mb-2">
                Stay updated
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                {/* ✅ LEFT SIDE: Subscription Form */}
                <div className="max-w-[425px]">

                    <p className="text-[#3E3E3B] text-base  font-medium mb-6">
                        Subscribe to receive latest updates
                    </p>
                    {/* Email */}

                    <Input
                        id={`firstName`}
                        name={`firstName`}
                        label="Email address*"
                    // value={values.firstName}
                    // onChange={onChange}
                    // error={isTouched('firstName') && getError('firstName')}

                    />

                    {/* First + Last name */}
                    <div className="flex gap-4 my-4">
                        <Input
                            id={`firstName`}
                            name={`firstName`}
                            label="First name*"
                        // value={values.firstName}
                        // onChange={onChange}
                        // error={isTouched('firstName') && getError('firstName')}

                        />
                        <Input
                            id={`firstName`}
                            name={`firstName`}
                            label="Last name*"
                        // value={values.firstName}
                        // onChange={onChange}
                        // error={isTouched('firstName') && getError('firstName')}

                        />

                    </div>

                    <p className="text-[#3E3E3B] text-sm  mb-4">
                        receive exclusive offers and new deals straight to your inbox.
                    </p>

                    <button className="w-full sm:w-[217px] px-6 py-3 bg-primary-1 rounded-lg text-white text-[16px]  font-semibold hover:bg-primary-700 transition">
                        Subscribe
                    </button>
                </div>

                {/* ✅ RIGHT SIDE: Contact Info + Social Media */}
                <div className="flex flex-col gap-4">
                    <p className="text-700 text-base  font-medium">
                        For media inquiries, contact our media team at:
                    </p>
                    <a
                        href="mailto:Media@flycham.com"
                        className="text-primary-1 text-base  font-medium underline"
                    >
                        Media@flycham.com
                    </a>

                    <p className="text-700 text-base  font-medium mt-4">
                        Follow us on
                    </p>

                    <div className="flex gap-4 text-primary-1 text-xl">
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
                                className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary-1 text-primary-1 hover:opacity-80 transition"
                            >
                                {Icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StayUpdated;
