import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { Ottelulistaus } from '../types';

export const haePelit = createAsyncThunk("pelit/haePelit", async () => {

    const url: string = process.env.API_URL!;

    const yhteys = await fetch(url);
  
    return await yhteys.json();
  
  });

  const peliData: Ottelulistaus[] = [];

  export const pelitSlice = createSlice({
    name: "Pelilista",
    initialState:{
        peliData: [...peliData],
        loading:false,
        error: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(haePelit.pending, (state)=> {
            state.loading = true;
        })
            .addCase(haePelit.fulfilled, (state, action) => {
            state.peliData = action.payload;
            state.loading = false;
        })
            .addCase(haePelit.rejected, (state) => {
            state.loading = true;
            state.loading = false;
        })
    },
});

export default pelitSlice.reducer;
  