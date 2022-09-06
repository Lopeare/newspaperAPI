import { configureStore } from "@reduxjs/toolkit";
import { apiReducer } from "../slices";

export const store = configureStore(
    {
        reducer: {
            api: apiReducer,
        },
    }
);