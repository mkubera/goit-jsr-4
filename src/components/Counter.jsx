import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementAction,
  decrementAction,
  resetAction,
} from "./../redux/actions";

const Counter = () => {
  const count = useSelector(({ count }) => count);
  const dispatch = useDispatch();

  const increment = (n) => {
    dispatch(incrementAction(n));
  };
  const decrement = (n) => {
    dispatch(decrementAction(n));
  };
  const reset = () => {
    dispatch(resetAction());
  };

  return (
    <div>
      <h3>Counter</h3>
      <p>{count}</p>
      <button onClick={() => increment(1)}>+1</button>
      <button onClick={() => increment(10)}>+10</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => decrement(10)}>-10</button>
      <button onClick={() => decrement(1)}>-1</button>
    </div>
  );
};

Counter.propTypes = {};

export default Counter;
