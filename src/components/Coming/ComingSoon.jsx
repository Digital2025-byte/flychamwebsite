'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo.webp';
import pattern from '@/assets/images/pattern1.webp';

const ComingSoon = () => {
    useEffect(() => {
        // Google Tag Manager
        const gtmScript = document.createElement('script');
        gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TKHJ4V8W');
    `;
        document.head.appendChild(gtmScript);

        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-JSMC8W0ERV';
        document.head.appendChild(gaScript);

        const gaInit = document.createElement('script');
        gaInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JSMC8W0ERV');
    `;
        document.head.appendChild(gaInit);
    }, []);

    return (
        <main
            className="relative bg-[#021F32] min-h-screen text-white font-[Montserrat] text-center overflow-hidden"
            style={{
                background: 'radial-gradient(ellipse at center, #021F32 0%, #010913 100%)',
            }}
        >
            {/* Background pattern */}
            <Image
                src={pattern}
                alt="Background Pattern"
                fill
                className="opacity-2.5 pointer-events-none select-none z-0 object-cover"
            />

            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-TKHJ4V8W"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                    title="gtm"
                />
            </noscript>

            {/* Overlay content */}
            <div className="relative z-10 py-12 px-6">
                {/* Background logo */}
                <div className="absolute inset-0 flex justify-center items-center z-0">
                    <Image
                        src={logo}
                        width={400}
                        alt="Background Logo"
                        className="object-contain opacity-[0.03] pointer-events-none select-none"
                    />
                </div>


                {/* Main Info */}
                <div className="relative z-10">
                    <Image src={logo} alt="Fly Cham Logo" className="mx-auto w-72 mb-6" />
<h1 className="text-4xl md:text-5xl  mb-4 font-[Montserrat]">
  Coming Soon
</h1>
                    <p className="text-[#D0C29C] text-lg md:text-xl max-w-xl mx-auto">
                        We’re preparing something amazing. Stay tuned for takeoff!
                    </p>

                </div>


                {/* Flight Path Animation */}
                <div className="relative h-[350px] max-w-[1000px] mx-auto mt-16 z-10 overflow-visible">
                    <svg viewBox="0 0 800 200" width="100%" height="200px" xmlns="http://www.w3.org/2000/svg">
                        <path id="flightPath" d="M 50 150 Q 300 0 550 150 Q 700 240 800 100" fill="none" stroke="#D0C29C66"
                            stroke-width="2" stroke-dasharray="6 6" />
                        <text font-size="40" fill="#D0C29C" dominant-baseline="middle" text-anchor="middle">
                            &#x2708;&#xFE0E;
                            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                                <mpath href="#flightPath" />
                            </animateMotion>
                        </text>
                    </svg>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-sm text-gray-400 py-6 relative z-10">&copy; 2025 Fly Cham</footer>
        </main>
    );
};

export default ComingSoon;
