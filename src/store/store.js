import { configureStore } from "@reduxjs/toolkit";
import { apiReducer, searchReducer } from "../slices";

export const store = configureStore(
    {
        reducer: {
            api: apiReducer,
            search: searchReducer,
        },
    }
);