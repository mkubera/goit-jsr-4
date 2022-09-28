import { createSlice } from "@reduxjs/toolkit";
import { INIT_TASKS } from "./inits";
import { fetchTasks } from "./operations";

// const incrementFn = (state, { payload }) => {
//   state.count = state.count + payload;
// };
// const decrementFn = (state, { payload }) => {
//   state.count = state.count - payload;
// };
// const resetFn = (state) => {
//   state.count = INIT_COUNT;
// };

const countSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: INIT_TASKS,
    tasksFilter: "all", // "all" | "completed" | "incomplete"
    isLoading: false,
    error: null,
  },
  reducers: {
    // increment: incrementFn,
    // decrement: decrementFn,
    // reset: resetFn,
  },
  extraReducers: {
    [fetchTasks.pending](state, action) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, { payload }) {
      console.log(payload);
      state.isLoading = false;
      state.error = null;
      state.tasks = payload;
    },
    [fetchTasks.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const {
  // actions: {
  //   increment,
  //   decrement,
  //   reset,
  // },
  reducer,
} = countSlice;

export default {
  reducer,
  // increment,
  // decrement,
  // reset,
};
