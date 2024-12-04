import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoslice.js'
export const store = configureStore({
    reducer:{
        todos:todoReducer
    } 
})