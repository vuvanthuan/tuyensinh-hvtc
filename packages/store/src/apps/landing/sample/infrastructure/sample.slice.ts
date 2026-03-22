import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { SampleState } from "../domain/sample.entity";

const initialState: SampleState = {
  count: 0,
  loading: false,
  message: null,
};

const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    resetState: () => initialState,
  },
});

export const {
  increment,
  decrement,
  setMessage,
  startLoading,
  stopLoading,
  resetState,
} = sampleSlice.actions;

export const sampleReducer = sampleSlice.reducer;
export default sampleSlice.reducer;
