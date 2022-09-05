import { createSlice } from '@reduxjs/toolkit'
import { getTitles } from './apiThonk'

const initialState = {
    articles: [],
    lastPage: 0,
    noMorePages: false,
    itemsPerRequest: 50, // setear esto automaticamente la primera vez que hace una llamada a la api , lo comprobamos y lo seteamos
    isLoading: false,
}

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        cleanArticles: (state) => {
            state.articles = [];
            state.lastPage = 0;
        },
    },
    extraReducers: {
        [getTitles.pending]: (state) => {
            state.isLoading = true
        },
        [getTitles.fulfilled]: (state, { payload }) => {
            state.articles = state.articles.concat(payload.items)
            state.lastPage++;
            state.isLoading = false
            if (state.itemsPerRequest > payload.items.length)
                state.noMorePages = true
        },
        [getTitles.rejected]: (state, action) => {
            state.isLoading = false
            state.noMorePages = true
            console.log('rejected, action-> payload: ', action);
            alert(action.payload)
        },
    },
})
export const { cleanArticles } = apiSlice.actions;
export const apiReducer = apiSlice.reducer