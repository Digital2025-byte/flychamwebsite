'use client'

import useIsMobile from '@/hooks/useIsMobile'
import React, { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation';

import BookingBox from '@/components/Home/SearchFlight'
import { useDispatch, useSelector } from 'react-redux';
import { setAirports } from '@/store/flightSlice';
const TestClient = ({ flights }) => {
    console.log('flights', flights);

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
    console.log('cities', cities);

    useEffect(() => {
        if (airPorts?.items?.length > 0) {

            setCities(airPorts.items)
        }
    }, [airPorts])
    const getCitiesArray = (type, iataSourceCode, search = "") => {
        console.log('search', search);
        console.log('iataSourceCode', iataSourceCode);
        console.log('type', type);

        if (!Array.isArray(cities)) return [];

        const normalizedSearch = search.toLowerCase();

        return cities.filter((c) => {
            const { iataCode, airPortTranslations } = c;
            const { airPortName, city, country } = airPortTranslations?.[0] || {};

            // ----- Source Logic -----
            if (type === "source") {
                if (!search) return true;

                const matchesSearch =
                    airPortName?.toLowerCase().includes(normalizedSearch) ||
                    city?.toLowerCase().includes(normalizedSearch) ||
                    country?.toLowerCase().includes(normalizedSearch) ||
                    iataCode?.toLowerCase().includes(normalizedSearch);

                return matchesSearch;
            }

            // ----- Destination Logic -----
            if (type === "destination") {
                // First apply DAM/ALP rule
                const isFromDamOrAlp = iataSourceCode === "DAM" || iataSourceCode === "ALP";

                if (isFromDamOrAlp) {
                    // Block returning to DAM or ALP
                    if (iataCode === "DAM" || iataCode === "ALP") return false;
                } else {
                    // Allow only DAM or ALP
                    if (iataCode !== "DAM" && iataCode !== "ALP") return false;
                }

                // Then apply search (if any)
                if (search) {
                    const matchesSearch =
                        airPortName?.toLowerCase().includes(normalizedSearch) ||
                        city?.toLowerCase().includes(normalizedSearch) ||
                        country?.toLowerCase().includes(normalizedSearch) ||
                        iataCode?.toLowerCase().includes(normalizedSearch);

                    return matchesSearch;
                }

                return true; // If passed DAM/ALP rule and no search
            }

            return false; // Fallback for unknown type
        });
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