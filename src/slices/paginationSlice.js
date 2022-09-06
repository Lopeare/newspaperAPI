import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentPage: 0,
    itemsPerPage: 5, // Dropdown para este valor
    startOffset: 0,
    endOffset: 10
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage: (state, { payload }) => {
            state.currentPage = payload
        },
        setItemsPerPage: (state, { payload }) => {
            state.itemsPerPage = payload
        },
        setOffset: (state, { payload }) => {
            state.startOffset = payload.start
            state.endOffset = payload.end
        },
    },
})

export const { setCurrentPage, setItemsPerPage, setOffset } = paginationSlice.actions
export const paginationReducer = paginationSlice.reducer