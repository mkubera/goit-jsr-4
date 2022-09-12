import React from "react";
import PropTypes from "prop-types";

const Button = ({ cb, title }) => {
  return <button onClick={cb}>{title}</button>;
};

Button.propTypes = {
  cb: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default Button;
