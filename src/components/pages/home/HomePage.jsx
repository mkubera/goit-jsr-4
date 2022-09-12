import React from "react";
import PropTypes from "prop-types";
import HomeIntro from "./HomeIntro";

const HomePage = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <HomeIntro />
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
