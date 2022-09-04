import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    history: [],
}
export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addSearch: (state, { payload }) => {
            state.history.push(payload)
        },
    },
})

export const { addSearch } = searchSlice.actions
export const searchReducer = searchSlice.reducer