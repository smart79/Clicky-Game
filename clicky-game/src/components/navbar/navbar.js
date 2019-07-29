import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-default navbar-fixed-top">
                Score: {this.props.score}

                <h3 id="title">Stranger Things Memory game!</h3>
            </nav>


        );
    }
}

export default Navbar;