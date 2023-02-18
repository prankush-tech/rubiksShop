import { createReducer } from '@reduxjs/toolkit';

export const authReducer = createReducer(
	{},
	{
		loadUserRequest: (state) => {
			state.loading = true;
		},
		loadUserSuccess: (state, action) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload;
		},
		loadUserFail: (state, action) => {
			state.loading = false;
			state.isAuthenticated = false;
			state.error = action.payload;
		},
		clearError: (state) => {
			state.error = null;
		},
		clearMessage: (state) => {
			state.message = null;
		},
		
	}
);
