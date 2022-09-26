import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import slices from "./../redux/slices";
import fetchCounter from "./../redux/operations";

const Counter = () => {
  const count = useSelector(({ counter: { count } }) => count);
  const dispatch = useDispatch();

  const increment = (n) => {
    dispatch(slices.increment(n));
  };
  const decrement = (n) => {
    dispatch(slices.decrement(n));
  };
  const reset = () => {
    dispatch(slices.reset());
  };
  const fetch = () => {
    dispatch(fetchCounter());
  };

  return (
    <div>
      <h3>Counter</h3>
      <p>{count}</p>
      <button onClick={() => increment(1)}>+1</button>
      <button onClick={() => increment(10)}>+10</button>
      <button onClick={reset}>reset</button>
      <button onClick={fetch}>fetch</button>
      <button onClick={() => decrement(10)}>-10</button>
      <button onClick={() => decrement(1)}>-1</button>
    </div>
  );
};

Counter.propTypes = {};

export default Counter;
