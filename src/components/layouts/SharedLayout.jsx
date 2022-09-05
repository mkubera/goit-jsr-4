import React from "react";
import PropTypes from "prop-types";
import { Outlet, Link } from "react-router-dom";

const SharedLayout = (props) => {
  const userIds = [1, 2, 3];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shared Layout</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/albums/1">Album 1</Link>
          </li>
          {userIds.map((userId) => (
            <li>
              <Link to={`/users/${userId}`}>User {userId}</Link>{" "}
              <Link to={`/users/${userId}/avatar`}>(avatar)</Link>
            </li>
          ))}
        </ul>
        <hr />
        <Outlet />
      </header>
    </div>
  );
};

SharedLayout.propTypes = {};

export default SharedLayout;
