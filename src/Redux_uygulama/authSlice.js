import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;  // Example logic
        },
        logout: (state) => {
            state.user = null;
        }
    }
});

export const { login, logout } = authSlice.actions;  // Ensure `login` is exported
export default authSlice.reducer;
