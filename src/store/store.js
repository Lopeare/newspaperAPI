import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../slices/newspaperSlice";
import { searchReducer } from "../slices/searchSlice";

export const store = configureStore(
    {
        reducer: {
            newspaper: postReducer,
            search: searchReducer,
        },
    }
);