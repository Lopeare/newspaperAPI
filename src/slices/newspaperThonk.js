import { createAsyncThunk } from '@reduxjs/toolkit'

export const getTitles = createAsyncThunk(
    //action type string
    'newspaper/getTitles',
    // callback function
    // añadir la pagina
    async ({ terms, page = 1 }, thunkAPI) => {
        console.log('terms: ', terms)
        console.log('page ', page)
        const uri = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${terms}&page=${page}&format=json`;
        console.log(uri);
        const res = fetch(uri)
            .then((data) => {
                return data.json()
            })
            .catch((err) => {
                console.log(err)
                return thunkAPI.rejectWithValue('OOPS! Something went wrong')
            })

        return res
    })

