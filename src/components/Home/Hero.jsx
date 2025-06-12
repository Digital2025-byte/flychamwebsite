'use client';

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import bg1 from '../../assets/images/main-slider/bg1.webp';
import bg2 from '../../assets/images/main-slider/bg2.webp';
import bg3 from '../../assets/images/main-slider/bg3.webp';
import { useTranslation } from 'react-i18next';
import useIsArabic from '@/hooks/useIsArabic';

const Hero = () => {
    const { t, i18n } = useTranslation()
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [bg1, bg2, bg3];
    const isArabic = useIsArabic();

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        // fade: !isArabic,
        rtl: i18n.language === 'ar', // ✅ works now
        beforeChange: (_, next) => setCurrentSlide(next),
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden' }}>
            {/* Slider */}
            <div dir={'ltr'}>
                <Slider ref={sliderRef} {...settings}>
                    {slides.map((image, index) => (
                        <div key={index}>
                            <div
                                style={{ position: 'relative', width: '100%', height: '600px' }} >
                                <Image
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority={index === 0}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>


            {/* Centered Text */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    zIndex: 10,
                    width: 'fit-content',
                    maxWidth: '90vw', // Prevents overflow on small screens
                    whiteSpace: 'normal', // Allows text wrapping
                    wordWrap: 'break-word', // Breaks long words if needed
                    lineHeight: '1.2' // Better line spacing
                }}
            >
                <h2 style={{
                    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    lineHeight: '1.1'
                }}>
                    {t("sliderTitle")}                </h2>
                <h1 style={{
                    fontSize: 'clamp(1.2rem, 4vw, 2rem)',
                    fontWeight: 'black',
                    lineHeight: '1.2'
                }}>
                {t("sliderDesc")}    
                </h1>
            </div>

            {/* Navigation Buttons */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '100px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '10px',
                    zIndex: 20,
                }}
            >
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => sliderRef.current.slickGoTo(index)}
                        style={{
                            width: index === currentSlide ? '40px' : '14px',
                            height: '14px',
                            borderRadius: '50px',
                            backgroundColor: index === currentSlide ? '#d2c5a3' : '#fff',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
