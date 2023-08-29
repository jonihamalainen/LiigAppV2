import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { Ottelulistaus } from '../types';

export const haePelit = createAsyncThunk("pelit/haePelit", async () => {

    const apiUrl: string = process.env.EXPO_PUBLIC_LIIGA_API_URl!;

    const yhteys = await fetch(apiUrl);
  
    return await yhteys.json();
  
  });

  const pelit: Ottelulistaus[] = [];

  export const pelitSlice = createSlice({
    name: "Pelilista",
    initialState:{
        pelit: [...pelit],
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
            state.pelit = action.payload;
            state.loading = false;
        })
            .addCase(haePelit.rejected, (state) => {
            state.loading = true;
            state.loading = false;
        })
    },
});

export default pelitSlice.reducer;
  