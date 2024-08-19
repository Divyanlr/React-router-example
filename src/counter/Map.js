import React, { Component } from "react";

class Map extends Component {
  state = {
    data: [
      {
        name: "divya",
        age: "28",
        place: "bangalore",
      },
      {
        name: "Aoun",
        age: "28",
        place: "bangalore",
      },
    ],
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((val, k) => {
            return (
              <li>
                {val.name} - {val.age} - {val.place}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Map;
