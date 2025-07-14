'use client'

import useIsMobile from '@/hooks/useIsMobile'
import React, { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation';

import BookingBox from '@/components/Home/SearchFlight'
import { useDispatch, useSelector } from 'react-redux';
import { setAirports } from '@/store/flightSlice';
const TestClient = ({ flights }) => {
    const isMobile = useIsMobile(1024);
    const router = useRouter()
    const { t } = useTranslation()
    const handleNavigate = () => {
        router.push('/destenations')
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setAirports(flights))
    }, [])

    const { airPorts } = useSelector(state => state.flights)

    const [cities, setCities] = useState([])
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (airPorts?.items?.length > 0) {

            setCities(airPorts.items)
        }
    }, [])
    const getCitiesArray = (type, iataSourceCode, search = "") => {
        const normalizedSearch = search.toLowerCase();

        const filtered = cities?.filter((c) => {
            const { airPortTranslations, iataCode } = c;
            const { airPortName, city, country } = airPortTranslations?.[0] || {};
            const matchesSearch = (
                airPortName?.toLowerCase().includes(normalizedSearch) ||
                city?.toLowerCase().includes(normalizedSearch) ||
                country?.toLowerCase().includes(normalizedSearch) ||
                iataCode?.toLowerCase().includes(normalizedSearch)
            );

            if (!matchesSearch) return false;

            if (type === "source") {
                return true; // all match
            }

            // Destination logic
            if (iataSourceCode === "DAM" || iataSourceCode === "ALP") {
                return iataCode !== "DAM" && iataCode !== "ALP";
            } else {
                return iataCode === "DAM" || iataCode === "ALP";
            }
        });

        return filtered || [];
    };


    return (
        <div className="transition-all duration-700">

            <div className="">
                <div className="w-[90%] md:w-[70%] mx-auto">

                    <BookingBox getCitiesArray={getCitiesArray} setCities={setCities} cities={cities} airPorts={airPorts}
                        search={search}
                        setSearch={setSearch}

                    />                </div>
            </div>
        </div>
    )
}

export default TestClient