import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    history: [],
}
export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addSearch: (state, { payload }) => {
            state.history.length >= 10 && state.history.shift();

            state.history.push({
                value: payload,
                id: state.history.length == 0 ? 0 : state.history.at(-1).id + 1
            })
        },
    },
})

export const { addSearch } = searchSlice.actions
export const searchReducer = searchSlice.reducer