import { configureStore } from "@reduxjs/toolkit";
import countSlices from "./countSlices";
import taskSlices from "./taskSlices";

const store = configureStore({
  reducer: { counter: countSlices.reducer, tasks: taskSlices.reducer },
});

export default store;
