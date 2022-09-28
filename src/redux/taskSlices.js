import { createSlice } from "@reduxjs/toolkit";
import { INIT_TASKS } from "./inits";
import { fetchTasks } from "./operations";

const countSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: INIT_TASKS,
    tasksFilter: "all", // "all" | "completed" | "incomplete"
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTasks.pending](state, action) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, { payload }) {
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

const { reducer } = countSlice;

export default {
  reducer,
};
