import { configureStore } from "@reduxjs/toolkit";
import StateReducer from './slice'
import MovieReducer from './movieSlice'
export const store = configureStore({
    reducer : {
        StateReducer,
        MovieReducer,
    }
})