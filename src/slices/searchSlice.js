import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    history: [],
}
export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addSearch: (state, { payload }) => {
            console.log('Añadiendo: ', payload)
            state.history.push(payload)
            console.log(state.history);
        },
    },
})

export const { addSearch } = searchSlice.actions
export const searchReducer = searchSlice.reducer