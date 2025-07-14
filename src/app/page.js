import { fetchFromAPI } from '@/lib/api';
import HomeClient from './HomeClient';

export const metadata = {
  title: 'Who We Are – Fly Cham',
  description:
    'Book flights across the world and discover the story behind Fly Cham, our identity, and our commitment to excellence in aviation.',
  icons: {
    icon: '/tabicon.svg',
  },
  openGraph: {
    title: 'Who We Are – Fly Cham',
    description:
      'Book flights across the world and discover the story behind Fly Cham, our identity, and our commitment to excellence in aviation.',
    url: 'https://flycham.com',
    siteName: 'Fly Cham',
    images: [
      {
        url: 'https://flycham.com/logo.jpg', // 🔁 Replace with correct image URL (JPG or PNG)
        width: 1200,
        height: 630,
        alt: 'Fly Cham Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Who We Are – Fly Cham',
    description:
      'Book flights across the world and discover the story behind Fly Cham, our identity, and our commitment to excellence in aviation.',
    images: ['https://flycham.com/logo.jpg'], // 🔁 Same as above
  },
};
// fetch logic: accepts ?search=param
export async function getAirports() {
  // const encoded = encodeURIComponent(search);
  return await fetchFromAPI(`/api/booking/AirPort`);
}

export default async function FlightPage() {
  const flights = await getAirports();
  return <HomeClient flights={flights} />;
};

