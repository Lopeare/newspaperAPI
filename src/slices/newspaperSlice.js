import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'bootstrap';
import { getTitles } from './newspaperThonk'
const initialState = {
    articles: [],
    lastApiPage: 0,
    noMoreApiPages: false,
    itemsPerRequest: 50,
    isLoading: false,
}

export const newspaperSlice = createSlice({
    name: 'newspaper',
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
export const { cleanArticles } = newspaperSlice.actions;
export const newspaperReducer = newspaperSlice.reducer