import { createSlice } from '@reduxjs/toolkit';

const initialState = { visibleCart: false, notification: null };

const toggleSlice = createSlice({
	name: 'toggle',
	initialState,
	reducers: {
		toggleCart(state) {
			state.visibleCart = !state.visibleCart;
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});

export const toggleActions = toggleSlice.actions;

export default toggleSlice;
