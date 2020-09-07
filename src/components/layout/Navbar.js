import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={props.icon}></i> {props.title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps = {
  icon: "fab fa-github",
  title: "Github Finder",
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Navbar;

// ==== ES6 Class based Component ====
/* import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Navbar extends Component {
  static defaultProps = {
    icon: "fab fa-github",
    title: "Github Finder",
  };

  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon}></i> {this.props.title}
        </h1>
      </nav>
    );
  }
} */
