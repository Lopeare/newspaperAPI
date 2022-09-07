import { createSlice } from '@reduxjs/toolkit'
import { getTitles } from './apiThunk'

const initialState = {
    articles: [],
    history: [],
    isLoading: false,
    lastPage: 0,
    lastSearch: '',
    noMorePages: false,
    totalItemsForRead: 0
}

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        addSearch: (state, { payload }) => {
            state.lastSearch = payload
            // Only keep 20 last search on history
            state.history.length >= 20 && state.history.shift();
            state.history.push({
                value: payload,
                id: state.history.length == 0 ? 0 : state.history.at(-1).id + 1
            })
        },

        cleanArticles: (state) => {
            state.articles = [];
            state.lastPage = 0;
            state.noMorePages = false;
            state.totalItemsForRead = 0;
        },
    },
    extraReducers: {
        [getTitles.pending]: (state) => {
            state.isLoading = true
        },

        [getTitles.fulfilled]: (state, { payload }) => {
            state.articles = state.articles.concat(payload.items)
            state.lastPage++;

            // Set total items available for read
            if (state.totalItemsForRead == 0) state.totalItemsForRead = payload.totalItems

            // Prevent future rejected request
            if (state.articles.length == state.totalItemsForRead) {
                state.noMorePages = true
            }

            state.isLoading = false
        },

        [getTitles.rejected]: (state, action) => {
            state.isLoading = false
            alert(action.payload)
        },
    },
})
export const { addSearch, cleanArticles } = apiSlice.actions;
export const apiReducer = apiSlice.reducer