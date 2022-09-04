import { createSlice } from '@reduxjs/toolkit'
import { getTitles } from './newspaperThonk'
const initialState = {
    articles: [],
    lastPage: 0,
    isLoading: false,
}

export const newspaperSlice = createSlice({
    name: 'newspaper',
    initialState,
    reducers: {
        cleanArticles: (state) => {
            state.articles = [];
            state.lastPage = 0;
            console.log('limpiando')
        }
    },
    extraReducers: {
        [getTitles.pending]: (state) => {
            state.isLoading = true
        },
        [getTitles.fulfilled]: (state, { payload }) => {
            console.log('añadiendo')
            state.articles = state.articles.concat(payload.items)
            state.lastPage++;
            state.isLoading = false
        },
        [getTitles.rejected]: (state, action) => {
            state.isLoading = false
            console.log('rejected, action-> payload: ', action.payload)
        },
    },
})
export const { cleanArticles } = newspaperSlice.actions;
export const newspaperReducer = newspaperSlice.reducer