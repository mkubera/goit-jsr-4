import { configureStore } from "@reduxjs/toolkit";
import slices from "./slices";

const store = configureStore({
  reducer: { counter: slices.reducer },
});

export default store;
