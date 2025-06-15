import HomeClient from './HomeClient';

export const metadata = {
  title: 'Fly Cham',
  description: 'Fly Cham – Choose Excellence',
  icons: {
    icon: '/tabicon.svg',
  },
  openGraph: {
    title: 'Who We Are – Fly Cham',
    description: 'Book flights accross the world and discover the story behind Fly Cham, our identity, and our commitment to excellence in aviation.',
    images: [
      {
        url: 'https://flycham.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Fly Cham Logo',
      },
    ],
  },
};

const FlightPage = () => {
  return <HomeClient />;
};

export default FlightPage;
