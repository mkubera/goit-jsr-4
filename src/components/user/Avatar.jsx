import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const Avatar = (props) => {
  const { userId } = useParams();

  return <div>User ({userId}) Avatar</div>;
};

Avatar.propTypes = {};

export default Avatar;
