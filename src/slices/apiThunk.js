import { createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URI = `https://chroniclingamerica.loc.gov/search/titles/results/`

export const getTitles = createAsyncThunk(
    //action type
    'api/getTitles',
    // callback function
    async ({ terms, page = 1 }, thunkAPI) => {

        const uri = `${BASE_URI}?terms=${terms}&page=${page}&format=json`;

        try {
            const res = await fetch(uri)
            return res.json()

        } catch (error) {
            return thunkAPI.rejectWithValue('OOPS! Something went wrong. Maybe no more page to read.')
        }
    })