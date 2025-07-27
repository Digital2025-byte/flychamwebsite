import React from 'react'
import Image from 'next/image'
import coverImg from "../../assets/images/Media-center/cover.png"

const Cover = () => {
    return (
        <div className="relative w-full h-[350px] overflow-hidden">
            {/* ✅ Background Image */}
            <Image
                src={coverImg}
                alt="Media center cover"
                layout="fill"
                objectFit="cover"
                priority
            />

            {/* ✅ Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* ✅ Text content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-white text-[48px] font-montserrat font-semibold">
                    Media center
                </h1>
                <p className="text-white text-[24px] font-montserrat font-medium mt-2">
                    Your source for news, press releases, and travel updates
                </p>
            </div>
        </div>
    )
}

export default Cover
