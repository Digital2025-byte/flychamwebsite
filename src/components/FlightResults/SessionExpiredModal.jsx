'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { Warning } from '@phosphor-icons/react';
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const SessionExpiredModal = ({ isOpen, onClose }) => {
    const router = useRouter();

    const handleReturnHome = () => {
        // onClose();
        router.push('/');
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => { }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300" leave="ease-in duration-200"
                    enterFrom="opacity-0" enterTo="opacity-100"
                    leaveFrom="opacity-100" leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-[#000000CC]  " />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
                    <div className="w-full max-w-xl p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300" leave="ease-in duration-200"
                            enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                            leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full transform overflow-hidden rounded-xl bg-[#FDFDFC] p-6 text-center shadow-xl transition-all">
                                <div className="mx-auto w-12 h-12 flex items-center justify-center mb-6">
                                    <Warning size={60} color='#BAA981' weight='fill' />

                                </div>
                                <Dialog.Title as="h3" className="text-[26px] font-semibold text-primary-1 font-montserrat">
                                    Your Session Has Expired
                                </Dialog.Title>
                                <div className="mt-4 text-[16px] text-600 font-medium font-montserrat">
                                    Oops! Looks like your session timed out. Please return to the homepage and continue search.
                                </div>

                                <div className="mt-8">
                                    <button
                                        onClick={handleReturnHome}
                                        className="cursor-pointer bg-primary-1 text-[#FFF] text-[16px] font-semibold font-montserrat px-6 py-3 rounded-md  transition"
                                    >
                                        Back to home page
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default SessionExpiredModal;
