import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from './reducers/userReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;


export const server = "https://prankush-rubiks-shop.onrender.com/api/v1"
// export const server = "http://localhost:4000/api/v1"