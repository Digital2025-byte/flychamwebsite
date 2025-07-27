'use client'
import React from 'react'
import FlightHeader from './FlightHeader'
import FlightList from './FlightList'
import SortFilterModal from './SortFilterModal'
import FlightDetailsModal from './FlightDetailsModal'
import FlightsListCounter from './FlightsListCounter'
import Divider from './Divider'

const FlighSelectStep = ({ flights, setFilterModalOpen, handleDetailsClick, isFilterModalOpen, isShowDetailsModalOpen,
  setFlightDetailsOpen, expandedFlight, handleSelectPlan, selectedFlight, setActiveStep, selectedType,
  setSelectedFlight, handleClickDate, IndirectAirPort
}) => {
  console.log('IndirectAirPort', IndirectAirPort);

  return (
    <div>
      {!selectedFlight &&
        <>
          <FlightHeader
            count={flights.length}
            setFilterModalOpen={setFilterModalOpen}

          />
        </>
      }
      {flights.length > 0 &&
        <>
          <FlightsListCounter type="Direct airport" count={flights.length} />
          <FlightList flights={flights} onDetailsClick={handleDetailsClick}
            handleSelectPlan={handleSelectPlan} selectedFlight={selectedFlight} setActiveStep={setActiveStep}
            selectedType={selectedType} setSelectedFlight={setSelectedFlight}
          />
          <Divider />
        </>
      }
      {IndirectAirPort.length > 0 &&
        <>

          <FlightsListCounter type="All airport" count={IndirectAirPort.length} />
          <FlightList flights={IndirectAirPort} onDetailsClick={handleDetailsClick}
            handleSelectPlan={handleSelectPlan} selectedFlight={selectedFlight} setActiveStep={setActiveStep}
            selectedType={selectedType} setSelectedFlight={setSelectedFlight}
          />
        </>
      }
      <SortFilterModal isOpen={isFilterModalOpen} onClose={() => setFilterModalOpen(false)} onApply={() => { }} />
      <FlightDetailsModal isOpen={isShowDetailsModalOpen} onClose={() => setFlightDetailsOpen(false)} flight={expandedFlight} />

    </div>
  )
}

export default FlighSelectStep