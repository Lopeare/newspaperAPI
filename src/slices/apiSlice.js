import { createSlice } from '@reduxjs/toolkit'
import { getTitles } from './apiThunk'

const initialState = {
    articles: [],
    history: [],
    lastSearch: '',
    lastPage: 0,
    noMorePages: false,
    itemsPerRequest: 10, // setear esto automaticamente la primera vez que hace una llamada a la api , lo comprobamos y lo seteamos
    totalItemsForRead: 0,
    isLoading: false,
    anyError: '',
}

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        addSearch: (state, { payload }) => {
            state.lastSearch = payload
            // Only keep 20 results
            state.history.length >= 20 && state.history.shift();
            state.history.push({
                value: payload,
                id: state.history.length == 0 ? 0 : state.history.at(-1).id + 1
            })
        },
        cleanArticles: (state) => {
            state.articles = [];
            state.lastPage = 0;
            state.totalItemsForRead = 0;
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
            if (state.totalItemsForRead == 0) state.totalItemsForRead = payload.totalItems
            console.log('TOTAL-ITEMS-FOR-READ ==== ', state.totalItemsForRead)
            if (state.articles.length == state.totalItemsForRead) {
                console.log('SETEANDO NO MORE PAGES TRUE')
                state.noMorePages = true
            }
            state.isLoading = false
        },
        [getTitles.rejected]: (state, action) => {
            state.isLoading = false
            console.log('rejected, action->: ', action);
            alert(action.payload)
        },
    },
})
export const { addSearch, cleanArticles } = apiSlice.actions;
export const apiReducer = apiSlice.reducer