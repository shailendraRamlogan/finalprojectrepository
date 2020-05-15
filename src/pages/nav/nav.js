import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
class Nav extends Component {
  render() {
    return (
      <ul className="menu">
        <li id="navButton">
          <Link to='/'>Submission</Link>
        </li>
        <li id="navButton">
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
