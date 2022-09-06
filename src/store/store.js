import { configureStore } from "@reduxjs/toolkit";
import { apiReducer, paginationReducer } from "../slices";

export const store = configureStore(
    {
        reducer: {
            api: apiReducer,
            pagination: paginationReducer
        },
    }
);