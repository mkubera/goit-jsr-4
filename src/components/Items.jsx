import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import items from "./../data/items";
import json from "./../utils/json";

export class Items extends Component {
  static propTypes = {};

  state = {
    items: items,
  };

  addItem = () => {
    const newItem = { id: nanoid(), name: "Pineapple" };

    this.setState((oldState) => ({
      ...oldState,
      items: [...oldState.items, newItem],
    }));
  };

  componentDidMount() {
    console.log("componentDidMount");
    document.addEventListener("keydown", (e) => {
      this.setState((oldState) => ({ ...oldState, modalOpened: false }));
    });
    console.log("items", json.decode("items"));
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    const { items } = this.state;

    return (
      <section>
        <h3>Items</h3>
        <button onClick={this.addItem}>Add Item</button>
        <ul>
          {items.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Items;
