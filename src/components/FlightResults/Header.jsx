import React from 'react';
import logo from "@/assets/images/logoblue.png";
import Image from 'next/image';
import { Airplane, ArrowLeft, CalendarBlank, MagnifyingGlass, UserCircle, Users } from '@phosphor-icons/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter(); // ← Initialize router

    return (
        <header className="flex w-full h-[69px] justify-center items-center gap-6 shrink-0 bg-100 max-md:h-auto max-md:py-3">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full max-w-[1400px] justify-between">


                {/* Logo */}
                <div className='flex items-center'>

                    <button onClick={() => router.back()}>
                        <ArrowLeft size={25} className="cursor-pointer text-primary-1" />
                    </button>

                    <div className="flex h-[100px] flex-col items-start gap-2.5 pt-2.5 pb-[40px] px-2.5">


                        <Link href="/" passHref>
                            <div className="cursor-pointer flex w-[180px] items-center gap-[5px] p-2.5">
                                <Image
                                    src={logo}
                                    alt="FlyCham Logo"
                                    width={180}
                                    height={50}
                                    className="object-contain w-[180px] h-auto"
                                />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Trip Info */}
                <div className="flex h-14 items-center gap-3.5 px-0 py-3 rounded-xl max-md:flex-col max-md:gap-3 max-md:w-full max-md:h-auto max-sm:gap-2">
                    <div className="flex items-center gap-3 p-2.5 max-md:flex-col max-md:gap-2 max-md:w-full">
                        <div className="flex items-center gap-2 max-md:justify-center">
                            <span className="text-600 text-base font-normal">Damascus</span>
                            <span className="text-600 text-base font-normal">(DAM)</span>
                        </div>
                        <div className="rotate-90">
                            <Airplane size={25} color="#5F5F5C" />
                        </div>
                        <div className="flex items-center gap-2 max-md:justify-center">
                            <span className="text-600 text-base font-normal">Dubai</span>
                            <span className="text-600 text-base font-normal">(DXB)</span>
                        </div>
                    </div>

                    <div className="w-px h-[33px] bg-[var(--text-600)] max-md:w-full max-md:h-px" />

                    <div className="flex flex-col xl:flex-row  p-0 xl:p-2.5 items-center gap-1.5 ">
                        <CalendarBlank size={25} color="#5F5F5C" />
                        <span className="text-600 text-base font-normal">Thu,10 Jul</span>
                    </div>

                    <div className="w-px h-[33px] bg-[var(--text-600)] max-xl:w-full max-xl:h-px" />

                    <div className="flex flex-col xl:flex-row  p-0 xl:p-2.5 justify-center items-center gap-2.5 ">
                        <Users size={25} color="#5F5F5C" />
                        <span className="text-600 text-base font-normal">Passengers: 1</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="cursor-pointer flex h-[51px] justify-center items-center gap-1 bg-secondary-1 px-2.5 py-[5px] rounded-lg max-sm:w-full max-sm:justify-center hover:bg-[#A89770] transition-colors">
                        <MagnifyingGlass size={25} color="#FFF" />
                        <span className="text-[#FDFDFC] text-base font-bold">Modify search</span>
                    </button>
                    <div className="cursor-pointer">
                        <UserCircle size={25} className="text-500" />
                    </div>

                </div>

            </div>
        </header>
    );
}

export default Header;
