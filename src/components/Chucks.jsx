import PropTypes from "prop-types";
import React, { Component } from "react";

import axios from "axios";
import apiChuck from "./../services/apiChuck";
import id from "./../utils/id";

// axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

class Chucks extends Component {
  static propTypes = {};

  state = { jokes: [], isLoading: false, error: null };

  fetchJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then(({ value }) => {
        console.log(value);
        this.setState((oldState) => ({
          ...oldState,
          jokes: [...oldState.jokes, { id: id.initId(), joke: value }],
        }));
      })
      .catch(console.log);
  };

  fetchJokeAxios = async () => {
    this.setState({ isLoading: true });

    try {
      const value = await apiChuck.getJoke();
      const newJoke = this.initJoke(value);
      this.addJoke(newJoke);
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  initJoke = (value) => ({ id: id.initId(), joke: value });

  addJoke = (joke) => {
    this.setState((oldState) => ({
      ...oldState,
      jokes: [...oldState.jokes, joke],
    }));
  };

  componentDidMount() {
    // this.fetchJoke();
    this.fetchJokeAxios();
  }

  render() {
    const { jokes, isLoading, error } = this.state;

    const isNotEmpty = (arr) => arr.length > 0;

    return (
      <section>
        <h3>Chucks</h3>
        <button onClick={this.fetchJokeAxios}>Fetch new joke</button>
        {error && <p>ERROR: Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {isNotEmpty(jokes) && (
          <ul>
            {this.state.jokes.map(({ id, joke }) => (
              <li key={id}>{joke}</li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}

export default Chucks;
