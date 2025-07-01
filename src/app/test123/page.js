'use client'

import useIsMobile from '@/hooks/useIsMobile'
import React from 'react'

import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation';

import BookingBox from '@/components/Home/SearchFlight'
const HomeClient = () => {
    const isMobile = useIsMobile(1024);
    const router = useRouter()
    const { t } = useTranslation()
    const handleNavigate = () => {
        router.push('/destenations')
    }

    return (
        <div className="transition-all duration-700">

            <div className="">
                <div className="w-[90%] md:w-[70%] mx-auto">
                    <BookingBox />
                </div>
            </div>
        </div>
    )
}

export default HomeClient