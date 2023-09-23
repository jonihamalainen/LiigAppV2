import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Ottelulistaus } from "../types";
import peliDataJson from "../peliDataJson.json";

export const haePelit = createAsyncThunk("pelit/haePelit", async () => {
  const jsonString: string = JSON.stringify(peliDataJson);

  const parse = JSON.parse(jsonString);

  return await parse;
});

const peliData: Ottelulistaus[] = [];

export const pelitSlice = createSlice({
  name: "Pelilista",
  initialState: {
    peliData: [...peliData],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(haePelit.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(haePelit.fulfilled, (state, action) => {
        state.peliData = action.payload;
        state.loading = false;
      })
      .addCase(haePelit.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default pelitSlice.reducer;
