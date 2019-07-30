import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <h3 id="title">Stranger Things Memory game!</h3>
                <p id="inst">Click an image to begin! Beware the Mindslayer if you select the same one twice!</p>Score: {this.props.score}
            </nav>


        );
    }
}

export default Navbar;