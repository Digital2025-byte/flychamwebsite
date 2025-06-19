'use client';

import React from 'react';
import bg1 from '@/assets/images/travel-update/bg1.webp';
import { useTranslation } from 'react-i18next';
import TravelCard from '@/components/Travel-update/TravelCard';
import Hero from '@/components/Travel-update/Hero';

const TravelUpdateClient = () => {
    const { t } = useTranslation();

    const slides = [bg1];

    const updates = [
        {
            label: t('travelCard.updateLabel'),
            date: t('travelCard.lastUpdated'),
            title: t('travelCard.title'),
            description: t('travelCard.description'),
            linkText: t('travelCard.linkText'),
            moreText: t('travelCard.moreText'),
            buttonText: t('travelCard.buttonText'), slug: "iraq-jordan-lebanon-iran"
        }
    ];


    return (
        <>
            <Hero
                slides={slides}
                title={t('travelsliderTitle')}
                objectFit="cover"
                parentHeight="responsive"
                height="responsive"
            />

            <div className="w-[90%] md:w-[80%] mx-auto px-2 py-4">
                {updates.map((update, index) => (
                    <div key={index} className="mb-6">
                        <TravelCard update={update} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default TravelUpdateClient;
