import React from 'react'

const FlightsListCounter = ({ count, type }) => {
    return (
        <div className='text-sm font-medium'>
            <span className='text-primary-1'>{type}</span>
            <span className='text-black'>  {count} ({count === 1 ? 'Result' : 'Results'})</span>
        </div>
    )
}

export default FlightsListCounter