import PropTypes from "prop-types";
import React, { Component, useEffect, useState } from "react";
import arrayExtra from "./../utils/array-extra";

const Chuck = (props) => {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then(({ value }) => {
        setJoke(() => value);
      })
      .catch(console.log);

    // willUnmount
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <section>
      {arrayExtra.isNotEmpty([])}
      <h3>Chuck</h3>
      <p>{joke === null ? "no useEffect yet" : joke}</p>
      <button onClick={() => setJoke((oldJoke) => `${oldJoke} [changed]`)}>
        change the joke
      </button>
    </section>
  );
};

// class Chuck extends Component {
//   static propTypes = {};

//   state = { joke: null };

//   componentDidMount() {
//     console.log("componentDidMount");

//     fetch("https://api.chucknorris.io/jokes/random")
//       .then((res) => res.json())
//       .then(({ value }) => {
//         console.log(value);
//         this.setState((oldState) => ({ ...oldState, joke: value }));
//       })
//       .catch(console.log);
//   }

//   render() {
//     console.log("render");

//     return (
//       <section>
//         <h3>Chuck</h3>
//         <p>{this.state.joke}</p>
//       </section>
//     );
//   }
// }

export default Chuck;
