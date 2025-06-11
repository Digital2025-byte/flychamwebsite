'use client'
import Footer from '@/components/Layout/Footer'
import React from 'react'
import { useRouter } from 'next/navigation'

const TravelAgent = () => {
    const router = useRouter();

    const handleNavigate = (link) => {
        if (link.startsWith('http')) {
            window.open(link, '_blank'); // Open external links in a new tab
        } else {
            router.push(link); // Navigate internally
        }
    };


    const Card = ({ title, text, link }) => (
        <div className="bg-main text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-center shadow-xl bg-opacity-90 backdrop-blur-md transition-transform hover:scale-105">
            <div>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-sm sm:text-base font-light leading-relaxed">{text}</p>
            </div>
            <button
                onClick={title === 'Log in' ? () => handleNavigate(link) : undefined}
                className="cursor-pointer w-full bg-secondary text-white font-semibold px-4 py-2 rounded mt-6 hover:bg-[#f6c940] transition-all"
            >
                Click here            </button>
        </div>
    );

    return (
        <>

            <div 
  className="min-h-screen flex flex-col items-center justify-center px-4 py-10 relative"
  style={{
    backgroundImage: `url(/wallpaper.webp)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }}
>
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card
                        title="Join Us"
                        text="Fill up the form and Join us as travel agent."
                        link=""
                    />
                    <Card
                        title="Log in"
                        text="Already a have an account? log in here"
                        link="https://reservations.flycham.com/xbe/"
                    />
                </div>

            </div>
            <Footer />
        </>
    );
};

export default TravelAgent;
