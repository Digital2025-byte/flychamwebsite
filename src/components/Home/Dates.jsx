import React, { useState, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { arSA, enUS } from 'date-fns/locale';
import TripTypeSelector from './TripTypeSelector';
import useIsMobile from '@/hooks/useIsMobile';
import useIsArabic from '@/hooks/useIsArabic';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

const Dates = ({ formik }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const isTab = useIsMobile('1024');
    const isMobile = useIsMobile('768');
    const isArabic = useIsArabic();
    const activeTap = 3;
    const tripType = formik.values.tripType

    const selected = tripType === 'oneway'
        ? formik.values.dateStart
            ? new Date(formik.values.dateStart)
            : undefined
        : (formik.values.dateStart && formik.values.dateEnd
            ? { from: new Date(formik.values.dateStart), to: new Date(formik.values.dateEnd) }
            : undefined);

    const handleDateSelect = (value) => {
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
            <TripTypeSelector isMobile={isMobile} formik={formik}
            />
            <div className="w-full my-3 h-[1px] bg-gray-200"></div>

            {tripType === 'roundtrip' && selected?.from && selected?.to && (
                <p className="text-sm mb-4">
                    Departure: <strong>{format(selected.from, 'dd MMM yyyy')}</strong> — Return: <strong>{format(selected.to, 'dd MMM yyyy')}</strong>
                </p>
            )}

            {tripType === 'oneway' && selected && (
                <p className="text-sm mb-4">
                    Departure: <strong>{format(selected, 'dd MMM yyyy')}</strong>
                </p>
            )}

            <div className="relative">
                  {/* Month Navigation Arrows */}
<div className="flex justify-between items-center mb-4 px-6">
  <button
    onClick={() =>
      setCurrentMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
      )
    }
    className="cursor-pointer w-9 h-9 rounded-full bg-[#f4f4f4] flex items-center justify-center hover:bg-[#e2e2e2] transition"
  >
    <CaretLeft size={20} className="text-gray-700" />
  </button>

  <button
    onClick={() =>
      setCurrentMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
      )
    }
    className="cursor-pointer w-9 h-9 rounded-full bg-[#f4f4f4] flex items-center justify-center hover:bg-[#e2e2e2] transition"
  >
    <CaretRight size={20} className="text-gray-700" />
  </button>
</div>

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
                        day: 'text-sm text-black',
                        today: 'border-[1px] border-[#B6A889] rounded-full text-black',
                        selected: 'bg-[#B6A889] text-black',
                        range_middle: 'bg-[#e6dabc61] text-black',
                        range_start: isArabic ? 'rounded-r-xl text-white' : 'rounded-l-xl text-white',
                        range_end: isArabic ? 'rounded-l-xl text-white' : 'rounded-r-xl text-white',
                    }}
                    components={{
                        DayContent: ({ date, activeModifiers }) => {
                            const isSelected = activeModifiers.selected;
                            const isStart = activeModifiers.range_start;
                            const isEnd = activeModifiers.range_end;

                            return (
                                <div
                                    className={`text-center leading-tight w-full h-full py-1 ${isSelected ? 'bg-[#B6A889] text-white' : ''} ${isStart ? (isArabic ? 'rounded-r-xl' : 'rounded-l-xl') : ''} ${isEnd ? (isArabic ? 'rounded-l-xl' : 'rounded-r-xl') : ''}`}
                                >
                                    <div className="text-[13px]">{date.getDate()}</div>
                                    <div className="text-[11px] font-light text-[#555]">850</div>
                                </div>
                            );
                        },
                    }}
                />
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200"></div>
            </div>

            <div className="w-full my-3 h-[1px] bg-gray-200"></div>
        </div>
    );
};

export default Dates;
