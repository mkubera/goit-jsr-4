import { createSlice } from "@reduxjs/toolkit";
import { INIT_COUNT } from "./inits";
import { fetchCounter } from "./operations";

const incrementFn = (state, { payload }) => {
  state.count = state.count + payload;
};
const decrementFn = (state, { payload }) => {
  state.count = state.count - payload;
};
const resetFn = (state) => {
  state.count = INIT_COUNT;
};

const countSlice = createSlice({
  name: "count",
  initialState: { count: INIT_COUNT, isLoading: false, error: null },
  reducers: {
    // LOCAL REDUCERS
    increment: incrementFn,
    decrement: decrementFn,
    reset: resetFn,
    // FETCH REDUCERS
    // Executed when the HTTP request starts
    // fetchingInProgress(state) {
    //   state.isLoading = true;
    // },
    // Will be executed if the HTTP request was successful
    // fetchingSuccess(state, { payload }) {
    //   console.log(payload);
    //   state.isLoading = false;
    //   state.error = null;
    //   state.count = 999;
    // },
    // Execute if HTTP request fails
    // fetchingError(state, { payload }) {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
  },
  extraReducers: {
    [fetchCounter.pending](state, action) {
      state.isLoading = true;
    },
    [fetchCounter.fulfilled](state, { payload }) {
      console.log(payload);
      state.isLoading = false;
      state.error = null;
      state.count = 999;
    },
    [fetchCounter.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const {
  actions: {
    increment,
    decrement,
    reset,
    // fetchingInProgress,
    // fetchingSuccess,
    // fetchingError,
  },
  reducer,
} = countSlice;

export default {
  reducer,
  increment,
  decrement,
  reset,
  // fetchingInProgress,
  // fetchingSuccess,
  // fetchingError,
};
