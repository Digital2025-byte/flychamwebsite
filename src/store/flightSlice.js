// store/slices/flightSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createListPassengerService, createPaymentService, getAirports, getBySessionIdService, getFlightsService } from './Services/flightServices';

const flightSlice = createSlice({
    name: 'flights',
    initialState: {
        airPorts: [],
        flights: [],
        searchParams: {},
        selectedFlight: {},
        selectedPlan: {},
        isLoading: false,
        isLoadingFlights: false,
        error: null,
        selectedPassengers: {},
        sessionInfo:{}
    },
    reducers: {
        setAirports: (state, action) => {
            state.airPorts = action.payload;
        },
        setSearchParams: (state, action) => {
            state.searchParams = action.payload;
        },
        setSelectedF: (state, action) => {
            state.selectedFlight = action.payload;
        },
        setSelectedPlan: (state, action) => {
            state.selectedPlan = action.payload;
        },
        setSelectedpassengers: (state, action) => {
            state.selectedPassengers = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAirports.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAirports.fulfilled, (state, action) => {
                state.isLoading = false;
                state.airPorts = action.payload;
            })
            .addCase(getAirports.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getFlightsService.pending, (state) => {
                state.isLoadingFlights = true;
                state.error = null;
            })
            .addCase(getFlightsService.fulfilled, (state, action) => {
                state.isLoadingFlights = false;
                state.flights = action.payload.flights;
            })
            .addCase(getFlightsService.rejected, (state, action) => {
                state.isLoadingFlights = false;
                state.error = action.payload;
            })
            .addCase(createListPassengerService.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createListPassengerService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.flights = action.payload.flights;
            })
            .addCase(createListPassengerService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(createPaymentService.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createPaymentService.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.flights = action.payload.flights;
            })
            .addCase(createPaymentService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getBySessionIdService.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getBySessionIdService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.sessionInfo = action.payload.items[0];
            })
            .addCase(getBySessionIdService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { setAirports, setSearchParams, setSelectedF, setSelectedPlan, setSelectedpassengers } = flightSlice.actions;
export default flightSlice.reducer;
