import DestenationClient from './DestenationClient';

export const metadata = {
    title: 'Destinations – Fly Cham',
    description: 'Explore Fly Cham’s flight destinations across the region and beyond.',
    icons: {
        icon: '/tabicon.svg',
    },
    openGraph: {
        title: 'Destinations – Fly Cham',
        description: 'Explore Fly Cham’s flight destinations across the region and beyond.',
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

const Page = () => {
    return <DestenationClient />;
};

export default Page;
