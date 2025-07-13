import React from 'react';
import CustomDateInput from '@/components/Ui/DateInput';
import Input from '@/components/Ui/Input';
import CustomDropdown from '@/components/Ui/TitleDropdown';

const PassengerFormSection = ({ index, values, onChange, setFieldValue }) => {
    return (
        <>
            {/* Title dropdown */}
            <div className="my-4 w-full md:w-40 flex gap-4 items-center">
                <CustomDropdown
                    selected={values.title}
                    onChange={(val) => setFieldValue(`passengers[${index}].title`, val)}
                    options={[
                        { label: "Mr", value: "Mr" },
                        { label: "Mrs", value: "Mrs" },
                        { label: "Ms", value: "Ms" }
                    ]}
                    placeholder="Title"
                />
            </div>

            {/* First & Last Name */}
            <div className="my-4 flex flex-col md:flex-row gap-4 md:pr-8">
                <Input
                    id={`passengers[${index}].firstName`}
                    name={`passengers[${index}].firstName`}
                    label="First Name"
                    value={values.firstName}
                    onChange={onChange}
                />
                <Input
                    id={`passengers[${index}].lastName`}
                    name={`passengers[${index}].lastName`}
                    label="Last Name"
                    value={values.lastName}
                    onChange={onChange}
                />
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col md:flex-row gap-4 md:pr-8">
                <CustomDateInput
                    value={values.dateOfBirth}
                    onChange={(val) =>
                        setFieldValue(`passengers[${index}].dateOfBirth`, val)
                    }
                />
            </div>
        </>
    );
};

export default PassengerFormSection;
