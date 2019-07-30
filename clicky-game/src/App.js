import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import ST from "./ST.json";
import "./App.css";

class App extends Component {
  state = {
    ST,
    clickedST: [],
    score: 0
  };

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <div className="wrapper">
          {this.state.ST.map(ST => (
            <Cards
              imageClick={this.imageClick}
              id={ST.id}
              key={ST.id}
              image={ST.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
