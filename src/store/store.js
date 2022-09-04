import { configureStore } from "@reduxjs/toolkit";
import { newspaperReducer } from "../slices/newspaperSlice";
import { searchReducer } from "../slices/searchSlice";

export const store = configureStore(
    {
        reducer: {
            newspaper: newspaperReducer,
            search: searchReducer,
        },
    }
);