import { createReducer } from '@reduxjs/toolkit';

const initialState = {
	cartItems: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems'))
		: {
				MKOTO: {
					quantity: 0,
					price: 10
				},
				NKOTO: {
					quantity: 0,
					price: 20
				},
				BKOTO: {
					quantity: 0,
					price: 25
				}
			},

	subTotal: localStorage.getItem('cartPrices') ? JSON.parse(localStorage.getItem('cartPrices')).subTotal : 0,
	tax: localStorage.getItem('cartPrices') ? JSON.parse(localStorage.getItem('cartPrices')).tax : 0,
	shippingCharges: localStorage.getItem('cartPrices')
		? JSON.parse(localStorage.getItem('cartPrices')).shippingCharges
		: 0,
	total: localStorage.getItem('cartPrices') ? JSON.parse(localStorage.getItem('cartPrices')).total : 0,
	shippingInfo: localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {}
};

export const cartReducer = createReducer(initialState, {
	MKOTOIncrement: (state) => {
		state.cartItems.MKOTO.quantity += 1;
	},
	NKOTOIncrement: (state) => {
		state.cartItems.NKOTO.quantity += 1;
	},
	BKOTOIncrement: (state) => {
		state.cartItems.BKOTO.quantity += 1;
	},

	MKOTODecrement: (state) => {
		state.cartItems.MKOTO.quantity -= 1;
	},
	NKOTODecrement: (state) => {
		state.cartItems.NKOTO.quantity -= 1;
	},
	BKOTODecrement: (state) => {
		state.cartItems.BKOTO.quantity -= 1;
	},

	calculatePrice: (state) => {
		state.subTotal =
			state.cartItems.MKOTO.price * state.cartItems.MKOTO.quantity +
			state.cartItems.NKOTO.price * state.cartItems.NKOTO.quantity +
			state.cartItems.BKOTO.price * state.cartItems.BKOTO.quantity;

		state.tax = state.subTotal * 0.1;
		state.shippingCharges = state.subTotal > 100 ? 0 : 20;
		state.total = state.subTotal + state.tax + state.shippingCharges;
	},

	emptyState: (state) => {
		state.cartItems = {
			MKOTO: {
				quantity: 0,
				price: 10
			},
			NKOTO: {
				quantity: 0,
				price: 20
			},
			BKOTO: {
				quantity: 0,
				price: 25
			}
		};

		state.subTotal = 0;
		state.shippingCharges = 0;
		state.tax = 0;
		state.total = 0;
	},

	addShippingInfo: (state, action) => {
		state.shippingInfo = {
			hNo: action.payload.hNo,
			city: action.payload.city,
			state: action.payload.state,
			country: action.payload.country,
			pinCode: action.payload.pinCode,
			phoneNo: action.payload.phoneNo
		};
	}
});
