import PropTypes from "prop-types";
import React, { Component } from "react";

export class Chuck extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      joke: null,
      dataFetched: false,
    };
  }

  componentDidMount() {
    // console.log(this.state.dataFetched);
    // if (!this.state.dataFetched) {
    return fetch("https://api.chucknorris.io/jokes/random")
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        this.setState((state) => ({
          ...state,
          joke: d.value,
          dataFetched: true,
        }));
      })
      .catch(console.log);
    // }
  }

  render() {
    return (
      <div>
        Chuck
        <p>{this.state.joke === null ? "Loading..." : this.state.joke}</p>
      </div>
    );
  }
}

export default Chuck;
