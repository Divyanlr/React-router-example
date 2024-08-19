import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1>I'm Todo</h1>
        <p>I got age as {this.props.Age}</p>
      </div>
    );
  }
}

export default Todo;
