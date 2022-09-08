import { createSlice } from '@reduxjs/toolkit';
import getTitles from './apiThunk';

const initialState = {
  articles: [], // articles read for a same term
  history: [], // Search history
  isLoading: false, // while fetching data
  lastPage: 0, // last page consumed
  lastSearch: '', // last search done
  noMorePages: false, // there no exist more resource pages
  totalItemsForRead: 0, // maximum items that can be read for a term
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    addSearch: (state, { payload }) => {
      state.lastSearch = payload;
      // Only keep 20 last search on history
      if (state.history.length >= 20) state.history.shift();
      state.history.push({
        value: payload,
        id: state.history.length === 0 ? 0 : state.history.at(-1).id + 1,
      });
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
      state.isLoading = true;
    },

    [getTitles.fulfilled]: (state, { payload }) => {
      state.articles = state.articles.concat(payload.items);
      state.lastPage += 1;

      // Set total items available for read
      if (state.totalItemsForRead === 0) state.totalItemsForRead = payload.totalItems;

      // Prevent future rejected request
      if (state.articles.length === state.totalItemsForRead) {
        state.noMorePages = true;
      }

      state.isLoading = false;
    },

    [getTitles.rejected]: (state, action) => {
      state.isLoading = false;
      // eslint-disable-next-line no-alert
      alert(action.payload);
    },
  },
});
export const { addSearch, cleanArticles } = apiSlice.actions;
export const apiReducer = apiSlice.reducer;
