'use client';
import Image from "next/image";
import c1 from "@/assets/images/cards/c1.webp";
import c2 from "@/assets/images/cards/c2.webp";
import c3 from "@/assets/images/cards/c3.webp";
import { useRouter } from "next/navigation";

const cards = [
  {
    image: c1,
    title: "OUR COMPANY",
    description: "Discover more",
    link: 'about'
  },
  {
    image: c2,
    title: "OUR MISSION",
    description: "Discover more",
    link: 'Mission'

  },
  {
    image: c3,
    title: "OUR RESPONSIBILITY",
    description: "Discover more",
    link: 'whoweare'

  },
];

export default function AboutFlyChamSection() {
  const router = useRouter()
  return (
    <section className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-4">
        {cards.map((card, index) => (
          <div
            onClick={() => router.push(`/${card.link}`)}
            key={index}
            className="cursor-pointer relative rounded-2xl overflow-hidden shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-1 h-[300px]" // ✅ fixed height
          >
            <div className="relative w-full h-full">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover w-full h-full"
                priority
              />
              
              {/* Smooth blur overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent backdrop-blur-[0.5px]"></div>
              
             
            </div>
            
            <div className="absolute bottom-4 left-4 z-20 text-white">
              <h3 className="text-lg md:text-xl font-bold drop-shadow-lg">{card.title}</h3>
              <p className="text-sm md:text-base text-secondary font-bold drop-shadow-md">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}