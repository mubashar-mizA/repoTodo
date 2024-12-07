import { configureStore } from "@reduxjs/toolkit";

import todoReducer from './todo.slice.js'
import authReducer from './auth.slice.js'


export const store = configureStore({
    reducer: {
        todos: todoReducer,
        auth: authReducer
    }
})