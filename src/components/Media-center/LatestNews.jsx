import React from "react";
import Image from "next/image";
import { ArrowRight, Clock } from "@phosphor-icons/react/dist/ssr";

const LatestNews = ({ lastNews }) => {
    const { date, category, title, description, image, link } = lastNews;

    return (
        <section className="w-full px-4 md:px-8 lg:px-16 py-10">
            {/* ✅ Section Title */}
            <h2 className="text-primary-1 text-2xl md:text-3xl font-montserrat font-bold mb-6">
                Latest News
            </h2>

            {/* ✅ News Card */}
            <div className="flex flex-col-reverse lg:flex-row gap-6 items-start">
                {/* ✅ Left Column: Text */}
                <div className="flex-1">
                    {/* ✅ Date & Category */}
                    <div className="flex items-center gap-2 text-600 mb-2">
                        <Clock size={18} weight="regular" />
                        <span className="text-sm md:text-base font-montserrat font-medium">
                            {date}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-600" />
                        <span className="text-sm md:text-base font-montserrat font-medium text-primary-1">
                            {category}
                        </span>
                    </div>

                    {/* ✅ Title */}
                    <h3 className="text-primary-1 text-lg md:text-xl lg:text-2xl font-montserrat font-semibold mb-3">
                        {title}
                    </h3>

                    {/* ✅ Description */}
                    <p className="text-700 text-sm md:text-base font-montserrat leading-6 mb-4">
                        {description}
                    </p>

                    {/* ✅ Read More Button */}
                    <button
                        // onClick={() => window.location.href = link} // Or use Next.js router.push(link)
                        className="
    inline-flex items-center justify-center gap-2 
    px-4 py-2 md:px-6 md:py-3 
    bg-[#BAA981] rounded-xl 
    text-white text-base md:text-lg font-montserrat font-semibold 
    hover:bg-[#a3936d] transition w-full sm:w-auto
  "
                    >
                        Read more
                        <ArrowRight size={18} weight="bold" />
                    </button>

                </div>

                {/* ✅ Right Column: Image */}
                <div className="flex-1 w-full lg:w-1/2">
                    <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={400}
                        className="rounded-xl object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default LatestNews;
