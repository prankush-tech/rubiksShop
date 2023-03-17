import {configureStore} from '@reduxjs/toolkit'

import { cartReducer, } from './reducers/cartReducer';
import { orderReducer, } from './reducers/orderReducer';


import { authReducer } from './reducers/userReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        order: orderReducer,
    },
});

export default store;


export const server = "https://prankush-rubiks-shop.onrender.com/api/v1"
// export const server = "http://localhost:4000/api/v1"