// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     articles: [],
// }

// export const newspaperSlice = createSlice({
//     name: 'newspaper',
//     initialState,
//     reducers: {
//         setArticles: (state, action) => {
//             state.articles = action.payload;
//         },
//     },
// })

// // Action creators are generated for each case reducer function
// export const { setArticles: increment } = newspaperSlice.actions

// //export default newspaperSlice.reducer

import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'

const initialState = {
    entities: [],
    loading: false,
}

export const getPosts = createAsyncThunk(
    //action type string
    'posts/getPosts',
    // callback function
    async (arg, thunkAPI) => {
        console.log(arg)

        const res = fetch('https://jsonplaceholder.typicode.com/posts')
            .then((data) => {
                return data.json()
            })
            .catch((err) => {
                console.log(err)
                return thunkAPI.rejectWithValue('OOPS!')
            })

        return res
    })


export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.loading = true
        },
        [getPosts.fulfilled]: (state, action) => {
            console.log(action)
            state.loading = false
            state.entities = action.payload
        },
        [getPosts.rejected]: (state, action) => {
            console.log('rejected, action-> payload: ', action.payload)
            state.loading = false
        },
    },
})

export const postReducer = postSlice.reducer