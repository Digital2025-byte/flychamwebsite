'use client'
import FilterControls from "../FilterControls";

const FlightHeader = ({ count, rightComponent, setFilterModalOpen }) => (
    <div className="my-4 px-3 flex justify-between items-center mb-6">
        <span className="text-black text-sm font-medium">({count} Result)</span>
        <div className="">
            <FilterControls onOpenModal={() => setFilterModalOpen(true)} />
        </div>


    </div>
);
export default FlightHeader