'use client'
import React from 'react';
import FormTitle from './FormTitle';
import Input from '@/components/Ui/Input';
import CustomDateInput from '@/components/Ui/DateInput';
import TitleDropdown from '@/components/Ui/TitleDropdown';
import Summary from './Summary';
import PassengerFormSection from './PassengerFormSection';
import SaveInfoToggle from './SaveInfoToggle';
import PrivacyConsentCheckboxes from './PrivacyConsentCheckboxes';
import StepBtns from './StepBtns';
import Section from '../Section';
import Divider from '../FlighSelectStep/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Phone, User } from '@phosphor-icons/react';
import ContactDetailsSection from './ContactDetailsSection';
import { createListPassengerService } from '@/store/Services/flightServices';
import { setSelectedpassengers } from '@/store/flightSlice';

const PassengerDetails = ({ setActiveStep, selectedFlight, selectedType }) => {
    const dispatch = useDispatch()
    const { searchParams } = useSelector((s) => s.flights)
    const { adults, children, infants } = searchParams
    let globalIndex = 0;

    const passengers = [
        { type: 'adult', count: 1, typeValue: 'ADT' },
        { type: 'child', count: 0, typeValue: 'CHD' },
        { type: 'infant', count: 0, typeValue: 'INF' },
    ].filter(p => p.count > 0);
    const initialPassengers = passengers.flatMap(p =>
        Array.from({ length: p.count }, () => ({
            idx: globalIndex++,
            type: p.type,
            typeValue: p.typeValue,
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            title: '',
        }))
    );

    const formik = useFormik({
        initialValues: {
            passengers: initialPassengers,
            contact: {
                countryCode: '',
                mobileNumber: '',
                email: '',
                passengerIndex: null
            },
            save: false,
            accept: false,
            recive: false
        },
        onSubmit: (values) => {
            const contactDetails = values.passengers[values.contact.passengerIndex];
            console.log('contactDetails', contactDetails);

            const { title, dateOfBirth, firstName, lastName, type } = contactDetails
            console.log('title', title);
            const data = {
                title,
                firstName,
                lastName,
                phoneNumber: values.contact.mobileNumber,
                countryCode: values.contact.countryCode,
                email: values.contact.email,
                passengers: values.passengers.map((p) => {
                    return {
                        birthDate: p.dateOfBirth,
                        passengerTypeCode: p.typeValue,
                        givenName: p.firstName,
                        surname: p.lastName,
                        nameTitle: p.title,
                        // Ms , Mr , 
                        // "telephone": {
                        //     "areaCityCode": "91",
                        //     "countryAccessCode": "+963",
                        //     "phoneNumber": "934205339"
                        // },
                        // "countryCode": "SY",
                        // "passport": {
                        //     "docID": "GFHYG",
                        //     "expireDate": "2033-05-25"
                        // }
                    }
                })
            }
            dispatch(createListPassengerService(data)).then((action) => {
                if (createListPassengerService.fulfilled.match(action)) {
                    dispatch(setSelectedpassengers(data))
                    setActiveStep(2)
                }
            })

        },
    });
    return (
        <div className="flex flex-col xl:flex-row gap-6">
            {/* Left side: Form (75%) */}
            <div className="w-full xl:flex-[3]">
                {formik.values.passengers.map((passenger, idx) => (
                    <Section key={idx}>
                        <FormTitle type={passenger.type} idx={idx} />
                        <PassengerFormSection
                            index={idx}
                            values={passenger}
                            onChange={formik.handleChange}
                            setFieldValue={formik.setFieldValue}
                        />
                    </Section>
                ))}
                <Section>
                    <ContactDetailsSection
                        passengers={formik.values.passengers}
                        values={formik.values.contact}
                        setFieldValue={formik.setFieldValue}
                        handleChange={formik.handleChange}
                    />


                    {/* Form Contact Details  */}
                </Section>

                <Section>
                    <SaveInfoToggle
                        value={formik.values.save}
                        onChange={(val) => formik.setFieldValue('save', val)}
                    />                    <Divider />
                </Section>
                <Section>
                    <PrivacyConsentCheckboxes
                        accept={formik.values.accept}
                        recive={formik.values.recive}
                        setFieldValue={formik.setFieldValue}
                    />
                </Section>
                <Section>
                    <StepBtns setActiveStep={setActiveStep} handleSubmit={formik.handleSubmit} />
                </Section>

            </div>

            {/* Right side: Summary (25%) */}
            <div className="w-full xl:flex-[1]">
                <Summary
                    selectedFlight={selectedFlight}
                    selectedType={selectedType}
                />
            </div>
        </div>
    );
};

export default PassengerDetails;
