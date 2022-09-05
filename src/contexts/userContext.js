import { createContext, useContext, useState } from "react";

const INIT_USER_CONTEXT_VALUE = {
  username: "Mango",
  isLoggedIn: false,
  age: 33,
};

// CREATE CONTEXT
const UserContext = createContext();

// READ/ACCESS CONTEXT (use <- HOOK)
const useUser = () => useContext(UserContext);

// CUSTOM PROVIDER
const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    INIT_USER_CONTEXT_VALUE.isLoggedIn
  );
  const [username, setUsername] = useState(INIT_USER_CONTEXT_VALUE.username);
  const [age, setAge] = useState(INIT_USER_CONTEXT_VALUE.age);

  const logIn = () => {
    setIsLoggedIn(true);
    setUsername(INIT_USER_CONTEXT_VALUE.username);
  };

  const logOut = () => {
    setIsLoggedIn(INIT_USER_CONTEXT_VALUE.isLoggedIn);
    setUsername(null);
  };

  const makeOlder = () => {
    setAge((oldAge) => oldAge + 1);
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, username, age, logIn, logOut, makeOlder }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, useUser, UserProvider };
