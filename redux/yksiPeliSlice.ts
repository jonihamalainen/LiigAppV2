import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkYear } from "../utils/timeUtils";
import yksiPeli from "../yksiPeli.json";

export const haePeli = createAsyncThunk(
  "peli/haePeli",
  async (id: string | string[]) => {
    /**  const url: string = process.env.EXPO_PUBLIC_GAMES_API_URL!;
    const vuosi: number = checkYear();

    const completeURL: string = `${url}${vuosi}/${id}`;

    const yhteys: Response = await fetch(completeURL);

    return await yhteys.text();
    */

    const jsonString: string = JSON.stringify(yksiPeli);

    return jsonString;
  }
);

export const yksiPeliSlice = createSlice({
  name: "YksiPeli",
  initialState: {
    yksiPeliData: "",
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(haePeli.pending, (state) => {
        state.yksiPeliData = "";
        state.loading = true;
        state.error = false;
      })
      .addCase(haePeli.fulfilled, (state, action) => {
        state.loading = false;
        state.yksiPeliData = action.payload;
      })
      .addCase(haePeli.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default yksiPeliSlice.reducer;
