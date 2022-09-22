import { INIT_COUNT } from "./inits";

// ------------- REDUCERS
// Elm: UPDATE
// const reducer = (oldState = {}, action) => {
//   const newState = { ...oldState };
//   return newState;
// };

const countReducer = (oldState = INIT_COUNT, action) => {
  switch (action.type) {
    case "INCREMENT":
      return oldState + 1;
    case "DECREMENT":
      return oldState - 1;

    default:
      return oldState;
  }
};

export { countReducer };
