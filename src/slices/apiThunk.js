import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../api/api'

const BASE_URI = `https://chroniclingamerica.loc.gov/search/titles/results/`

export const getTitles = createAsyncThunk(
    //action type
    'api/getTitles',
    // callback function
    async ({ terms, page = 1 }, thunkAPI) => {

        //const uri = `${BASE_URI}?terms=${terms}&page=${page}&format=json`;

        try {
            //const res = await fetch(uri)
            // return res.json()
            const res = await api(terms, page)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue('OOPS! Something went wrong. Maybe no more page to read.')
        }
    })