'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const SectionTexts = ({ head, desc, btn,redirectLink }) => {
  const router = useRouter()

    return (
        <div className="flex flex-col xl:flex-row justify-between items-start bg-white mb-5">
            <div className="max-w-3xl">
                <h2
                    className="text-xl md:text-2xl font-extrabold text-main"
                    style={{ textShadow: '0.2px 0.2px #00253C' }}
                >
                    {head}
                </h2>
                <p className="text-sm md:text-base text-main mt-1">
                    {
                        desc
                    }
                </p>
            </div>
            {btn &&
                <button className="w-full xl:w-auto mt-4 xl:mt-0 cursor-pointer border border-sky-900 text-sky-900 text-sm px-4 py-2 rounded hover:bg-sky-900 hover:text-white transition" onClick={() => router.push(`/destenations`)}>
                    {btn}
                </button>
            }
        </div>
    );
};

export default SectionTexts;
