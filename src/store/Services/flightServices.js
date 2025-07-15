import apiClient from '@/lib/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const sliceName = 'airPorts';

export const getAirports = createAsyncThunk(
    `${sliceName}/getAirports`,
    async ({ search }, thunkAPI) => {
        try {
            const filters = `language==en;search@=${search || ''}`;
            const response = await apiClient.get(`/api/booking/AirPort`, {
                params: { filters },
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || error.message || 'Something went wrong'
            );
        }
    }
);
export const getFlightsService = createAsyncThunk(
    `${sliceName}/getFlightsService`,
    async (data, thunkAPI) => {
        try {

            const response = await apiClient.post(`/api2/GetFlightsWithPrice/?filters=language==en`, data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || error.message || 'Something went wrong'
            );
        }
    }
);
export const createListPassengerService = createAsyncThunk(
    `${sliceName}/createListPassengerService`,
    async (data, thunkAPI) => {
        try {

            const response = await apiClient.post(`/api/booking/Contact/CreateListPassenger`, data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || error.message || 'Something went wrong'
            );
        }
    }
);
export const createPaymentService = createAsyncThunk(
    `${sliceName}/createPaymentService`,
    async (data, thunkAPI) => {
        try {

            const response = await apiClient.post(`/api/booking/Payment/Checkout`, data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || error.message || 'Something went wrong'
            );
        }
    }
);
export const getBySessionIdService = createAsyncThunk(
  `${sliceName}/getBySessionIdService`,
  async (id, thunkAPI) => {
    try {
      const response = await apiClient.get(
        `/api/booking/PaymentPNRResult/GetBySessionId`,
        {
          headers: {
            SessionId: id,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || 'Something went wrong'
      );
    }
  }
);
