import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { arSA, enUS } from 'date-fns/locale';
import useIsMobile from '@/hooks/useIsMobile';
import useIsArabic from '@/hooks/useIsArabic';
import TripTypeSelector from '../../TripTypeSelector';
import MonthNavigation from './MonthNavigation';
import SelectedDateDisplay from './SelectedDateDisplay';
import CustomDayContent from './CustomDayContent';

const Dates = ({ formik }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const isMobile = useIsMobile('768');
    const isArabic = useIsArabic();
    const tripType = formik.values.tripType;

    const selected = tripType === 'oneway'
        ? formik.values.dateStart ? new Date(formik.values.dateStart) : undefined
        : formik.values.dateStart && formik.values.dateEnd
            ? { from: new Date(formik.values.dateStart), to: new Date(formik.values.dateEnd) }
            : undefined;

    const handleDateSelect = (value) => {
        console.log('value', value);

        if (tripType === 'oneway') {
            if (value instanceof Date) {
                formik.setFieldValue('dateStart', value);
                formik.setFieldValue('dateEnd', '');
            }
        } else {
            if (value?.from && value?.to) {
                formik.setFieldValue('dateStart', value.from);
                formik.setFieldValue('dateEnd', value.to);
            }
        }
    };

    return (
        <div className="bg-white rounded-2xl p-6 w-full max-w-5xl mx-auto">
            <TripTypeSelector isMobile={isMobile} formik={formik} />
            <div className=" hidden md:block w-full my-3 h-[1px] bg-gray-200"></div>


            <SelectedDateDisplay selected={selected} tripType={tripType} />

            <div className="relative">
                <MonthNavigation currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />

                <DayPicker
                    month={currentMonth}
                    numberOfMonths={2}
                    pagedNavigation
                    locale={isArabic ? arSA : enUS}
                    disabled={{ before: new Date() }}
                    mode={tripType === 'oneway' ? 'single' : 'range'}
                    selected={selected}
                    onSelect={handleDateSelect}
                    className="flex justify-center"
                    classNames={{
                        head_cell: 'uppercase text-xs font-bold text-gray-500 text-center',
                        caption_label: 'text-center text-lg font-semibold text-black',
                        day: 'text-sm text-black transition duration-300 ease-in-out w-8 h-8 ',
                        today: '',

                        selected: tripType === 'oneway'
                            ? ' rounded-full text-white bg-secondary'
                            : 'bg-[#B6A889] text-black',
                        range_middle: 'bg-[#e6dabc61] text-black',
                        range_start: isArabic ? 'rounded-r-xl text-white' : 'rounded-l-xl text-white',
                        range_end: isArabic ? 'rounded-l-xl text-white' : 'rounded-r-xl text-white',
                    }}
                    components={{
                        DayContent: (props) => <CustomDayContent {...props} isArabic={isArabic} />,
                    }}
                />
                <div className="hidden md:block absolute left-1/2 top-5 bottom-5 w-[1px] bg-gray-200"></div>
            </div>

            <div className=" hidden md:block w-full my-3 h-[1px] bg-gray-200"></div>
        </div>
    );
};

export default Dates;
