import Image from 'next/image';
import React from 'react'
import planepath from '@/assets/images/planepath.png';
import DurationDashed from './DurationDashed';
import useFormattedFlightTimes from '@/hooks/useFormattedFlightTimes';

const FlightTimeInfo = ({
    isLg,
    isMd,
    isXl,
    flight
}) => {
    const dashedLength = !isXl ? 20 : !isLg ? 10 : !isMd ? 6 : 4;

    const { arrivalTime, departureTime, destinationCode, originCode } = useFormattedFlightTimes(flight);

    return (
        <div className="flex items-start gap-6">
            <div className="text-center">
                <time className="text-[24px] md:text-2xl text-800">{departureTime}</time>
                <div className="text-[12px] md:text-600 text-base">{originCode}</div>
            </div>

            <div className="pt-4">
                <DurationDashed
                    length={dashedLength}
                    width={35}
                    height={35}
                    logoWidth={20}
                    startSize={10}
                />
            </div>

            <div className="text-center">
                <time className="text-[24px] md:text-2xl text-800">{arrivalTime}</time>
                <div className="text-[12px] md:text-600 text-600 text-base">{destinationCode}</div>
            </div>
        </div>
    );
}

export default FlightTimeInfo