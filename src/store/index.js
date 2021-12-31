import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../reducers/cart';
import toggleSlice from '../reducers/toggle';

const store = configureStore({
	reducer: { toggle: toggleSlice.reducer, cart: cartSlice.reducer },
});

export default store;
