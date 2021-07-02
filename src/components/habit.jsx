import React, { Component } from "react";

class Habit extends Component {
  state = { count: 0 };

  handleIncrement = () =>
    this.setState((curr) => ({
      count: curr.count + 1,
    }));

  handleDecrement = () =>
    this.setState((curr) => ({
      count: curr.count - 1 < 0 ? 0 : curr.count - 1,
    }));

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-inrease"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
