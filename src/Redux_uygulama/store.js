import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

// Create store
const store = configureStore({
    reducer: {
        auth: authReducer,
    }
});

export default store; 
