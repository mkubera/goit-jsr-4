import PropTypes from "prop-types";
import React, { Component } from "react";
import items from "./../data/items";
import { decode, encode } from "./../utils/json";

export class Items extends Component {
  static propTypes = {};

  state = {
    items: items,
    hasError: false,
    modalOpened: true,
  };

  addItem = () =>
    this.setState((oldState) => ({
      ...oldState,
      items: [...oldState.items, { id: 3, name: "Pineapple" }],
      // items: { hi: "there" },
    }));

  componentDidMount() {
    console.log("componentDidMount");
    document.addEventListener("keydown", (e) => {
      console.log(e);
      this.setState((oldState) => ({ ...oldState, modalOpened: false }));
    });
    console.log("items", decode("items"));
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentDidCatch(error, info) {
    console.log(info);
    this.setState((oldState) => ({ ...oldState, hasError: true }));
  }

  render() {
    const { hasError, items } = this.state;
    return (
      <>
        {hasError ? (
          <p>Has error</p>
        ) : (
          <div onKeyDown={console.log}>
            <p>{this.state.modalOpened ? "opened" : "closed"}</p>
            <input type="text" onKeyPress={console.log} />
            <button onClick={this.addItem}>Add Item</button>
            <ul>
              {items.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default Items;
