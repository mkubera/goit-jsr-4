import PropTypes from "prop-types";
import React, { Component } from "react";

class Chuck extends Component {
  static propTypes = {};

  state = { joke: null };

  componentDidMount() {
    console.log("componentDidMount");

    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then(({ value }) => {
        console.log(value);
        this.setState((oldState) => ({ ...oldState, joke: value }));
      })
      .catch(console.log);
  }

  render() {
    console.log("render");

    return (
      <section>
        <h3>Chuck</h3>
        <p>{this.state.joke}</p>
      </section>
    );
  }
}

export default Chuck;
