import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface SampleState {
  count: number;
  loading: boolean;
  message: string | null;
}

const initialState: SampleState = {
  count: 0,
  loading: false,
  message: null,
};

const SampleSlice = createSlice({
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
} = SampleSlice.actions;

export default SampleSlice.reducer;
