import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./contexts/userContext";
import { BrowserRouter } from "react-router-dom";

// In React 18 <React.StrictMode> triggers componentDidMount twice
// (changed from React 17)
// https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state
const StrictMode = ({ hasReusableState, children }) => {
  return hasReusableState ? (
    <React.StrictMode>{children}</React.StrictMode>
  ) : (
    <>{children}</>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode hasReusableState={!true}>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
