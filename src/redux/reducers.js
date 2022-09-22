import { createReducer } from "@reduxjs/toolkit";
import { INCREMENT, DECREMENT, RESET } from "./actions";
import { INIT_COUNT } from "./inits";

// ------------- REDUCERS
// Elm: UPDATE

const increment = (oldState, { payload }) => oldState + payload;
const decrement = (oldState, { payload }) => oldState - payload;
const reset = () => INIT_COUNT;

const countReducer = createReducer(INIT_COUNT, {
  [INCREMENT]: increment,
  [DECREMENT]: decrement,
  [RESET]: reset,
});

export { countReducer };
