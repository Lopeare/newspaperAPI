import { createSlice } from '@reduxjs/toolkit'
import { getTitles } from './apiThunk'

const initialState = {
    articles: [],
    history: [],
    lastPage: 0,
    noMorePages: false,
    itemsPerRequest: 50, // setear esto automaticamente la primera vez que hace una llamada a la api , lo comprobamos y lo seteamos
    isLoading: false,
}

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        addSearch: (state, { payload }) => {
            state.history.length >= 10 && state.history.shift();

            state.history.push({
                value: payload,
                id: state.history.length == 0 ? 0 : state.history.at(-1).id + 1
            })
        },
        cleanArticles: (state) => {
            state.articles = [];
            state.lastPage = 0;
            state.noMorePages = false;
        },
    },
    extraReducers: {
        [getTitles.pending]: (state) => {
            state.isLoading = true
        },
        [getTitles.fulfilled]: (state, { payload }) => {
            state.articles = state.articles.concat(payload.items)
            state.lastPage++;

            if (state.itemsPerRequest > payload.items.length)
                state.noMorePages = true

            state.isLoading = false
        },
        [getTitles.rejected]: (state, action) => {
            state.isLoading = false
            state.noMorePages = true
            console.log('rejected, action-> payload: ', action);
            alert(action.payload)
        },
    },
})
export const { addSearch, cleanArticles } = apiSlice.actions;
export const apiReducer = apiSlice.reducer