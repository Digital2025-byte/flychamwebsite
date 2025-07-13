// lib/api.js
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchFromAPI(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    console.log('🔗 Fetching:', url); // Add this for debug

    const res = await fetch(url, {
        cache: 'no-store',
        ...options, // allows overrides like headers, method, etc.
    });

    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
}
