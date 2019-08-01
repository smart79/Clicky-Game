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
  imageClick = event => {
    const currentST = event.target.alt;
    const STAlreadyClicked =
      this.state.clickedST.indexOf(currentST) > -1;

    if (STAlreadyClicked) {
      this.setState({
        ST: this.state.ST.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedST: [],
        score: 0
      });
      alert("LOSER!");

    } else {
      this.setState(
        {
          ST: this.state.ST.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedST: this.state.clickedST.concat(
            currentST
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("You Win!");
            this.setState({
              ST: this.state.ST.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedST: [],
              score: 0
            });
          }
        }
      );
    }
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
