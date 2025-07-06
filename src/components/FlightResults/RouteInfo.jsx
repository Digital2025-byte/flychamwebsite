import useIsMobile from '@/hooks/useIsMobile';
import { ArrowRight } from '@phosphor-icons/react';
import React from 'react';

const RouteInfo = () => {
const isLg = !useIsMobile(1024); // true if > 1024
    return (
        <section className="">
            <div className="flex">
                <div className="flex items-start justify-center gap-4 flex-wrap md:flex-nowrap">
                    {/* From */}
                    <div className="text-center">
                        <h1 className="text-primary-1 text-[16px] lg:text-[32px]  font-bold leading-tight">
                            Damascus
                        </h1>
                        <p className="hidden lg:block text-primary-1 text-sm text-start font-normal">
                            Damascus Intl (DAM)
                        </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center items-center">
                        <ArrowRight size={isLg ? 48 : 20} className='text-400' />


                    </div>

                    {/* To */}
                    <div className="text-center">
                        <h1 className="text-primary-1 text-[16px] lg:text-[32px]  font-bold leading-tight">
                            Dubai
                        </h1>
                        <p className=" hidden lg:block text-primary-1 text-sm font-normal">
                            Dubai Intl (DXB)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RouteInfo;
