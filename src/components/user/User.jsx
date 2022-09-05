import React from "react";
import PropTypes from "prop-types";
import UserMenu from "./UserMenu";

const User = (props) => {
  return (
    <div>
      <h3>User</h3>
      <UserMenu />
    </div>
  );
};

User.propTypes = {};

export default User;
