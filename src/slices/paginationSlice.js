import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    currentPage: 0,
    itemsPerPage: 10,
    startOffset: 0,
    endOffset: 10,
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage: (state, { payload }) => {
            state.currentPage = payload
            state.startOffset = state.currentPage * state.itemsPerPage
            state.endOffset = state.startOffset + state.itemsPerPage
        },
        setItemsPerPage: (state, { payload }) => {
            state.itemsPerPage = payload
            state.startOffset = state.currentPage * state.itemsPerPage
            state.endOffset = state.startOffset + state.itemsPerPage
        },

    },
})

export const { setCurrentPage, setItemsPerPage, setOffset } = paginationSlice.actions
export const paginationReducer = paginationSlice.reducer