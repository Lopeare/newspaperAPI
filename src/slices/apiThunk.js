import { createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URI = `https://chroniclingamerica.loc.gov/search/titles/results/`

export const getTitles = createAsyncThunk(
    //action type string
    'api/getTitles',
    // callback function
    async ({ terms, page = 1 }, thunkAPI) => {
        // console.log('terms: ', terms)
        // console.log('page ', page)
        const uri = `${BASE_URI}?terms=${terms}&page=${page}&format=json`;
        //console.log(uri);
        const res = fetch(uri)
            .then((data) => {
                return data.json()
            })
            .catch((err) => {
                //console.log(err)
                return thunkAPI.rejectWithValue('OOPS! Something went wrong. Maybe no more page to read.')
            })

        return res
    })

// TRY CATCH *************************************************