'use client'
import React from 'react';
import { format, isSameDay } from 'date-fns';

const SelectedDateDisplay = ({ selected, tripType }) => {

    let text = '';

    if (tripType === 'Return' && selected?.from) {
        text = (
            <>
                Departure: <strong>{format(selected.from, 'dd MMM yyyy')}</strong>
                {' '}— Return:
                {!selected.to || isSameDay(selected.from, selected.to) ? null : (
                    <> <strong>{format(selected.to, 'dd MMM yyyy')}</strong></>
                )}
            </>
        );
    } else if (tripType === 'OneWay' && selected) {
        text = (
            <>
                Departure: <strong>{format(selected, 'dd MMM yyyy')}</strong>
            </>
        );
    }

    return (
        <p
            className="text-center text-sm my-5 mb-2 min-h-[20px] transition-opacity duration-300"
            style={{ opacity: text ? 1 : 0 }}
        >
            {text || '‎' /* invisible non-breaking space to preserve height */}
        </p>
    );
};

export default SelectedDateDisplay;
