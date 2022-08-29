import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Album = (props) => {
  const [id, setId] = useState(1);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((res) => res.json())
      .then(({ title }) => setTitle(() => title))
      .catch(console.log);
  }, [id]);

  return (
    <article>
      <h3>
        Album: ({id}) {title}
      </h3>
      <button onClick={() => setId((oldId) => oldId + 1)}>next album</button>
    </article>
  );
};

Album.propTypes = {};

export default Album;
