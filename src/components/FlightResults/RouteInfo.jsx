import React from 'react';

const RouteInfo = () => {
    return (
        <section className="">
            <div className="flex">
                <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
                    {/* From */}
                    <div className="text-center">
                        <h1 className="text-[#054E72] text-[32px] md:text-[40px] font-bold leading-tight">
                            Damascus
                        </h1>
                        <p className="text-[#054E72] text-sm text-start font-normal mt-1">
                            Damascus Intl (DAM)
                        </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center items-center">
                        <svg
                            width="72"
                            height="49"
                            viewBox="0 0 72 49"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[40px] md:w-[72px]"
                        >
                            <path
                                d="M41.414 6.52747L59.4134 22.7266C59.5994 22.8937 59.7469 23.0922 59.8476 23.3107C59.9482 23.5293 60 23.7635 60 24C60 24.2365 59.9482 24.4708 59.8476 24.6893C59.7469 24.9078 59.5994 25.1063 59.4134 25.2734L41.414 41.4725C41.0388 41.8103 40.5298 42 39.9991 42C39.4684 42 38.9594 41.8103 38.5841 41.4725C38.2089 41.1348 37.998 40.6767 37.998 40.1991C37.998 39.7215 38.2089 39.2634 38.5841 38.9257L53.1712 25.7999H13.9999C13.4695 25.7999 12.9608 25.6103 12.5858 25.2727C12.2107 24.9352 12 24.4774 12 24C12 23.5226 12.2107 23.0648 12.5858 22.7273C12.9608 22.3897 13.4695 22.2001 13.9999 22.2001H53.1712L38.5841 9.07433C38.2089 8.7366 37.998 8.27853 37.998 7.8009C37.998 7.32328 38.2089 6.86521 38.5841 6.52747C38.9594 6.18974 39.4684 6 39.9991 6C40.5298 6 41.0388 6.18974 41.414 6.52747Z"
                                fill="#AFAFAC"
                            />
                        </svg>
                    </div>

                    {/* To */}
                    <div className="text-center">
                        <h1 className="text-[#054E72] text-[32px] md:text-[40px] font-bold leading-tight">
                            Dubai
                        </h1>
                        <p className="text-[#054E72] text-sm font-normal mt-1">
                            Dubai Intl (DXB)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RouteInfo;
