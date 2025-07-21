'use client'
import React from 'react';
import { Info, Phone } from '@phosphor-icons/react';
import Input from '@/components/Ui/Input';
import CustomDropdown from '@/components/Ui/TitleDropdown';
import countries from '@/util/countries';
import ErrorMessage from '@/components/Ui/ErrorMessage';

const ContactDetailsSection = ({ passengers, values, setFieldValue, handleChange, errors }) => {

    const adultOptions = passengers
        .map((p, idx) => ({ ...p, idx }))
        .filter((p) => p.type === "adult")
        .map((p, i) => {
            const title = p.title || "";
            const name = `${p.firstName} ${p.lastName}`.trim();
            return {
                label: name ? `${title} ${name}`.trim() : `Passenger ${i + 1}`,
                value: p.idx,
            };
        });

    return (
        <div className="mt-4">
            <div className="flex items-center gap-2 text-700 text-base font-semibold my-4">
                <Phone className="w-5 h-5 text-[var(--text-700)]" />
                <span>Contact details</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4 md:pr-8">
                {/* select adult */}
                <div className="w-full ">
                    <CustomDropdown
                        selected={
                            values.passengerIndex !== null
                                ? String(values.passengerIndex)
                                : "Select an adult"
                        } onChange={(val) => {
                            setFieldValue("contact.passengerIndex", Number(val));
                        }}
                        options={adultOptions.map(opt => ({ ...opt, value: String(opt.value) }))}
                        placeholder="Select an adult"
                    />

                </div>
                {/* Country code dropdown */}



            </div>
            <div className="flex flex-col lg:flex-row items-center md:pr-8 gap-4 my-4 ">


                <div className="w-full ">
                    <CustomDropdown
                        selected={values.countryCode}
                        onChange={(val) => setFieldValue("contact.countryCode", val)}
                        options={countries}
                        type="countries"
                        placeholder="Country code"
                    />
                </div>

                {/* Mobile number input */}
                <div className="w-full ">
                    <Input
                        name="contact.mobileNumber"
                        value={values.mobileNumber}
                        onChange={handleChange}
                        placeholder="Mobile number"
                        label="Mobile number"
                        // error={errors?.mobileNumber}
                        type="tel"
                    />
                    {/* <ErrorMessage error={errors?.mobileNumber} /> */}

                </div>

            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4 md:pr-8">


                {/* Email address */}
                <Input
                    name="contact.email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    label="Email address"
                    type="email"
                />
            </div>
        </div >
    );
};

export default ContactDetailsSection;
