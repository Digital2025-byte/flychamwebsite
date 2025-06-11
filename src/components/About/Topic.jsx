'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const Topic = () => {
    const router = useRouter();

    const handleNavigate = (link) => router.push(`${link}`);

    const Card = ({ title, text, link }) => (
        <div className="bg-main text-white rounded-xl p-8 flex flex-col justify-between text-center shadow-2xl flex-1 backdrop-blur-sm bg-opacity-80">
            <div>
                <h2 className="text-2xl font-semibold mb-3">{title}</h2>
                <p className="text-sm font-light leading-relaxed">{text}</p>
            </div>
            <button
                onClick={title !== 'Our Fleet' ? () => handleNavigate(link) : () => { }}
                className="w-full bg-secondary text-white font-semibold px-4 py-2 rounded mt-4 hover:bg-[#f6c940] hover:scale-[1.02] transition-all duration-200"
            >
                Discover more
            </button>
        </div>
    );

    return (
        <div className="relative w-full h-screen z-0 py-20">
            <video
                src="/videos/ved.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="hidden lg:block absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
                <div className="flex flex-col md:flex-row gap-8 max-w-7xl w-full h-[500px] items-stretch">

                    {/* Left Block */}
                    <div className="flex-1 bg-main text-white rounded-xl p-10 flex flex-col justify-center text-center shadow-2xl backdrop-blur-sm bg-opacity-80">
                        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                        <p className="text-sm md:text-base font-light leading-relaxed max-w-md mx-auto">
                           Shaping the future of air travel with a bold vision and a shared commitment. Fly Cham connects people, cultures, and opportunities across the region with reliability and forward-thinking service
                        </p>
                        <button
                            // onClick={() => handleNavigate('/whoweare')}
                            className="w-full bg-secondary text-white font-semibold px-4 py-2 rounded mt-6 hover:bg-[#f6c940] hover:scale-[1.02] transition-all duration-200"
                        >
                            Discover more
                        </button>
                    </div>

                    {/* Right Column Cards */}
                    <div className="flex flex-col gap-6 w-full md:w-[460px]">
                        <Card
                            title="Our Responsibility"
                            text="Our journey doesn’t end in the sky. We believe in supporting communities,
                    creating opportunities for youth, and embracing sustainability in everything we do."
                            link="/Mission"
                        />
                        <Card
                            title="Our Fleet"
                            text="Modern, efficient, and built for comfort — our fleet is designed to meet
                    the needs of today’s travelers."
                            link="/whoweare"



                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;
