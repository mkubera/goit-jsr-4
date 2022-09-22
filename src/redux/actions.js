import { createAction } from "@reduxjs/toolkit";

// ------------- ACTIONS
// Elm: MSG

// Types
const INCREMENT = "counter/increment";
const DECREMENT = "counter/decrement";
const RESET = "counter/reset";

// Functions
const incrementAction = createAction(INCREMENT);
const decrementAction = createAction(DECREMENT);
const resetAction = createAction(RESET);

export {
  INCREMENT,
  DECREMENT,
  RESET,
  incrementAction,
  decrementAction,
  resetAction,
};
