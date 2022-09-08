import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Navigate, useSearchParams } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get("username");

  // 1. UPDATE USER'a (useState)
  useEffect(() => {
    if (username === "") return;

    const fetchUser = async () => {
      // const user = await FakeAPI.getUser(username);
      const res = {
        code: 200,
        message: "Login successful",
        user: { id: 2, username },
      };
      setUser(res.user);
    };

    fetchUser();
  }, [username]);

  // 2. UPDATE URL (query param 'username')
  const logIn = async (e) => {
    e.preventDefault();
    // Fake Response object
    // const res = await FakeAPI.login(e);
    const newUsername = e.currentTarget.elements.username.value;
    // const res = {
    //   code: 200,
    //   message: "Login successful",
    //   user: { id: 2, username: newUsername },
    // };

    // setIsLoggedIn(res.code === 200);
    // setUser(res.user);
    setSearchParams({ username: newUsername });
  };

  return (
    <>
      {/* {isLoggedIn && <Navigate to={`/users/${user.id}`} replace />} */}
      {<p>{user?.username}</p>}
      {<LoginForm logIn={logIn} />}
    </>
  );
};

Login.propTypes = {};

export default Login;
