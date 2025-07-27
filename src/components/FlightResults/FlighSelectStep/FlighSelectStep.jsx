'use client'
import React from 'react'
import FlightHeader from './FlightHeader'
import FlightList from './FlightList'
import SortFilterModal from './SortFilterModal'
import FlightDetailsModal from './FlightDetailsModal'
import FlightsListCounter from './FlightsListCounter'
import Divider from './Divider'

const FlighSelectStep = ({
  flights = [],
  IndirectAirPort = [],
  selectedFlight,
  selectedType,
  expandedFlight,
  isFilterModalOpen,
  isShowDetailsModalOpen,
  setFilterModalOpen,
  setFlightDetailsOpen,
  setActiveStep,
  setSelectedFlight,
  handleDetailsClick,
  handleSelectPlan,
}) => {
  const hasFlights = flights.length > 0
  const hasIndirectFlights = IndirectAirPort.length > 0

  return (
    <div>
      {/* Header and Direct Flights */}
      {!selectedFlight && (
        <>
          <FlightHeader count={flights.length} setFilterModalOpen={setFilterModalOpen} />
          <FlightsListCounter type="Direct airport" count={flights.length} />
        </>
      )}

      {/* Selected Flight View */}
      {selectedFlight && (
        <>
          <FlightList
            flights={[]} // empty because you're showing selectedFlight details only
            onDetailsClick={handleDetailsClick}
            handleSelectPlan={handleSelectPlan}
            selectedFlight={selectedFlight}
            setActiveStep={setActiveStep}
            selectedType={selectedType}
            setSelectedFlight={setSelectedFlight}
          />
          <Divider />
        </>
      )}

      {/* Direct Flights List */}
      {hasFlights && !selectedFlight && (
        <>
          <FlightList
            flights={flights}
            onDetailsClick={handleDetailsClick}
            handleSelectPlan={handleSelectPlan}
            selectedFlight={selectedFlight}
            setActiveStep={setActiveStep}
            selectedType={selectedType}
            setSelectedFlight={setSelectedFlight}
          />
          <Divider />
        </>
      )}

      {/* Indirect Flights */}
      {!selectedFlight && <FlightsListCounter type="All airport" count={IndirectAirPort.length} />}

      {hasIndirectFlights && !selectedFlight && (
        <FlightList
          flights={IndirectAirPort}
          onDetailsClick={handleDetailsClick}
          handleSelectPlan={handleSelectPlan}
          selectedFlight={selectedFlight}
          setActiveStep={setActiveStep}
          selectedType={selectedType}
          setSelectedFlight={setSelectedFlight}
        />
      )}

      {/* Modals */}
      <SortFilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        onApply={() => {}}
      />
      <FlightDetailsModal
        isOpen={isShowDetailsModalOpen}
        onClose={() => setFlightDetailsOpen(false)}
        flight={expandedFlight}
      />
    </div>
  )
}

export default FlighSelectStep
