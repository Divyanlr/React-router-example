import React, { Component } from "react";

class Input extends Component {
  state = {
    first: "",
    second: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleClick = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="first"
            value={this.state.first}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="second"
            value={this.state.second}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleClick}>
            {" "}
            Click to join !!{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
