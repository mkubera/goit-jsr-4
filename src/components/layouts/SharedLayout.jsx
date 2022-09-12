import React from "react";
import PropTypes from "prop-types";
import { Outlet, Link } from "react-router-dom";

const SharedLayout = (props) => {
  const userIds = [1, 2, 3];

  return (
    <div className="App">
      <header className="App-header">
        <ul className="App-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/albums/1">Album 1</Link>
          </li>
          <li>
            <Link to="/users/login">Log In</Link>
          </li>
          {userIds.map((userId) => (
            <li>
              <Link to={`/users/${userId}`}>User {userId}</Link>{" "}
              <Link to={`/users/${userId}/avatar`}>(avatar)</Link>
            </li>
          ))}
        </ul>

        <p>Outlet:start</p>

        <Outlet />

        <p>Outlet:end</p>
      </header>
      <footer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
        inventore! Distinctio suscipit nemo earum nobis hic tempore temporibus
        perferendis impedit ab, adipisci velit accusantium cupiditate aliquid
        optio voluptatem officia? Quam.
      </footer>
    </div>
  );
};

SharedLayout.propTypes = {};

export default SharedLayout;
