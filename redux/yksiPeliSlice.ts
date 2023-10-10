import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkYear } from "../utils/timeUtils";
import { Peli } from "../types";

export const haePeli = createAsyncThunk("peli/haePeli", async (id: string) => {
  const url: string = process.env.EXPO_PUBLIC_GAMES_API_URL!;
  const vuosi: number = checkYear();

  const yhteys: Response = await fetch(`https://liiga.fi/api/v1/games/2023/1`);

  const jsonResponse = await yhteys.json();

  return await jsonResponse;
});

const yksiPeliData: Peli[] = [];

export const yksiPeliSlice = createSlice({
  name: "YksiPeli",
  initialState: {
    yksiPeliData: [...yksiPeliData],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(haePeli.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(haePeli.fulfilled, (state, action) => {
        state.yksiPeliData = action.payload;
        state.loading = false;
      })
      .addCase(haePeli.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default yksiPeliSlice.reducer;
