import React from 'react';

const MilesToggle = ({ useMiles, setUseMiles, isMobile }) => {
    return (
        <div className={`flex items-center gap-3 ${isMobile ? 'mt-3' : ''}`}>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useMiles}
                    onChange={() => setUseMiles(!useMiles)}
                />
                <div className="w-10 h-6 bg-gray-300 rounded-full peer peer-checked:bg-main relative transition-colors">
                    <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-4" />
                </div>
            </label>
            <span className="text-sm text-main font-semibold whitespace-nowrap">
                Book with Miles
            </span>
        </div>
    );
};

export default MilesToggle;
