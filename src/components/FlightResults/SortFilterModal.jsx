'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { X } from '@phosphor-icons/react';

// Custom Checkbox component
// Custom Checkbox component
const CustomCheckbox = ({ checked, onChange, label }) => (
    <label className="flex items-center gap-3 cursor-pointer select-none">
        <div
            className={`flex justify-center items-center w-5 h-5 p-[2px] rounded-[4px] 
        ${checked ? 'bg-[#054E72]' : 'bg-white border border-[#B0B0AE]'}`}
        >
            {checked && (
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            )}
        </div>
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="hidden"
        />
        <span className="text-[#1A1A1A] text-sm">{label}</span>
    </label>
);


const SortFilterModal = ({ isOpen, onClose, onApply }) => {
    const [sortBy, setSortBy] = useState('recommended');
    const [departureTime, setDepartureTime] = useState({ any: true, day: false, night: false });
    const [stops, setStops] = useState({ any: true, nonstop: false, oneStop: false });

    const handleToggle = (state, setState, key) => {
        key === 'any'
            ? setState({ any: true, ...Object.fromEntries(Object.keys(state).filter(k => k !== 'any').map(k => [k, false])) })
            : setState({ ...state, any: false, [key]: !state[key] });
    };

    const FilterGroup = ({ title, options, type, value, onChange }) => (
        <div className="flex flex-col gap-3">
            <p className="font-medium mb-3">{title}</p>
            {options.map(({ key, label }) =>
                type === 'radio' ? (
                    <label key={key} className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                            type="radio"
                            name={title}
                            checked={value === key}
                            onChange={() => onChange(key)}
                            className="accent-[#054E72]"
                        />
                        <span className="text-[#1A1A1A] text-sm">{label}</span>
                    </label>
                ) : (
                    <CustomCheckbox
                        key={key}
                        checked={value[key]}
                        onChange={() => onChange(key)}
                        label={label}
                    />
                )
            )}
        </div>
    );

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child as={Fragment}>
                    <div className="fixed inset-0 bg-[#000000CC]" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child as={Fragment}>
                            <Dialog.Panel className="w-full max-w-[815px] max-h-[274px] rounded-2xl bg-white p-6 shadow-xl">
                                <div className="flex justify-between mb-3">
                                    <Dialog.Title className="text-lg font-semibold">Sort & Filter</Dialog.Title>
                                    <button onClick={onClose}><X size={20} /></button>
                                </div>

                                <hr className="border-[#E5E5E5] my-2" />

                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <FilterGroup
                                        title="Sort by"
                                        type="radio"
                                        value={sortBy}
                                        onChange={setSortBy}
                                        options={[
                                            { key: 'recommended', label: 'Recommended' },
                                            { key: 'lowest', label: 'Lowest price' },
                                            { key: '1stop', label: '1 Stop' },
                                        ]}
                                    />
                                    <FilterGroup
                                        title="Departure time"
                                        type="checkbox"
                                        value={departureTime}
                                        onChange={(key) => handleToggle(departureTime, setDepartureTime, key)}
                                        options={[
                                            { key: 'any', label: 'Any' },
                                            { key: 'day', label: 'Day' },
                                            { key: 'night', label: 'Night' },
                                        ]}
                                    />
                                    <FilterGroup
                                        title="Number of stops"
                                        type="checkbox"
                                        value={stops}
                                        onChange={(key) => handleToggle(stops, setStops, key)}
                                        options={[
                                            { key: 'any', label: 'Any' },
                                            { key: 'nonstop', label: 'Non stop' },
                                            { key: 'oneStop', label: '1 Stop' },
                                        ]}
                                    />
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <button
                                        onClick={() => {
                                            onApply?.({ sortBy, departureTime, stops });
                                            onClose();
                                        }}
                                        className="px-6 py-2 rounded-md bg-[#C1AA81] text-white font-semibold text-sm hover:bg-[#b69d76] transition"
                                    >
                                        Apply
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

export default SortFilterModal;
