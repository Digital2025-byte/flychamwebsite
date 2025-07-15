import React from 'react'
import TestClient from './TestClient'
import { fetchFromAPI } from '@/lib/api'

// ✅ Async data fetching function
export async function getAirports() {
    return await fetchFromAPI(`/api/booking/AirPort?filters=language==en&sorts=iata`)
}

// ✅ Async Server Component
const Test = async () => {
    const flights = await getAirports()

    return (
        <div>
            <TestClient flights={flights} />
        </div>
    )
}

export default Test
