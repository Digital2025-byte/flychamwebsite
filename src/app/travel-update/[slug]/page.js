import React from 'react';
import bg1 from '@/assets/images/travel-update/bg1.webp';
import Hero from '@/components/Travel-update/Hero';
import TravelCard from '@/components/Travel-update/TravelCard';
import { TravelUpdateDetail } from '@/components/Travel-update/TravelUpdateDetail';

export async function generateStaticParams() {
  return [
    { slug: 'iraq-jordan-lebanon-iran' },
    { slug: 'kuwait-uae' }
    // add more slugs here!
  ];
}

const travelUpdates = {
  'iraq-jordan-lebanon': {
    label: 'Update',
    date: 'Last updated: 15 June 2025, 06:38 Dubai (GMT+4)',
    title: 'Flight suspensions',
    description: 'Lorem ipsum dolor sit amet...',
    linkText: 'Manage Your Booking',
    moreText: 'Morbi convallis convallis diam sit amet lacinia.',
    buttonText: 'Find more'
  },
  'kuwait-uae': {
    label: 'Update',
    date: 'Last updated: 18 June 2025',
    title: 'Flight suspensions - Kuwait & UAE',
    description: 'Some flights may be delayed due to weather...',
    linkText: 'Manage Your Booking',
    moreText: 'Stay updated for more details.',
    buttonText: 'Find more'
  }
};

const Page = ({ params }) => {
  const { slug } = params;
  const updateData = travelUpdates[slug];
  const slides = [bg1];

  if (!updateData) {
    return (
      <div className="text-center py-10 text-xl text-red-500">
        Update not found for <span className="font-bold">{slug}</span>
      </div>
    );
  }

  return (
    <>
      <Hero
        slides={slides}
        title={updateData.title}
        objectFit="cover"
        parentHeight="responsive"
        height="responsive"
      />

      <div className="w-[90%] md:w-[80%] mx-auto px-2 py-4">
        <TravelUpdateDetail />
      </div>
    </>
  );
};

export default Page;
