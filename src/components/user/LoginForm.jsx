import React from "react";
import PropTypes from "prop-types";

const LoginForm = ({ logIn }) => {
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={logIn}>
        <input type="text" name="username" defaultValue={"Marcin"} />
        <button>Log in</button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
