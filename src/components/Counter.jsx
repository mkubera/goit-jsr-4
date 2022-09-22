import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { incrementAction, decrementAction } from "./../redux/actions";

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementAction);
  };
  const decrement = () => {
    dispatch(decrementAction);
  };

  return (
    <div>
      <h3>Counter</h3>
      <p>{count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

Counter.propTypes = {};

export default Counter;
