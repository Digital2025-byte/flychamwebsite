'use client';
import FilterControls from '../FilterControls';

const FlightHeader = ({ count, rightComponent, setFilterModalOpen }) => (
 
  <div className="my-4 px-3 flex justify-end items-center mb-6">
      <FilterControls onOpenModal={() => setFilterModalOpen(true)} />
    </div>
);

export default FlightHeader;
