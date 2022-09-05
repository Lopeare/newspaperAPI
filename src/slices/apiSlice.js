import { createSlice } from '@reduxjs/toolkit'
import { getTitles } from './apiThonk'

const initialState = {
    articles: [],
    lastApiPage: 0,
    noMoreApiPages: false,
    itemsPerRequest: 50,
    isLoading: false,
}

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        cleanArticles: (state) => {
            state.articles = [];
            state.lastApiPage = 0;
        },
    },
    extraReducers: {
        [getTitles.pending]: (state) => {
            state.isLoading = true
        },
        [getTitles.fulfilled]: (state, { payload }) => {
            state.articles = state.articles.concat(payload.items)
            state.lastApiPage++;
            state.isLoading = false
            if (state.itemsPerRequest > payload.items.length)
                state.noMoreApiPages = true
        },
        [getTitles.rejected]: (state, action) => {
            state.isLoading = false
            state.noMoreApiPages = true
            console.log('rejected, action-> payload: ', action);
            alert(action.payload)
        },
    },
})
export const { cleanArticles } = apiSlice.actions;
export const apiReducer = apiSlice.reducer