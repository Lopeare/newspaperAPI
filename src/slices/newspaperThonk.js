import { createAsyncThunk } from '@reduxjs/toolkit'

export const getTitles = createAsyncThunk(
    //action type string
    'newspaper/getTitles',
    // callback function
    async (term, thunkAPI) => {
        const res = fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=${term}&format=json`)
            .then((data) => {
                return data.json()
            })
            .catch((err) => {
                console.log(err)
                return thunkAPI.rejectWithValue('OOPS!')
            })

        return res
    })

