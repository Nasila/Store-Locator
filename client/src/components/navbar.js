import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link,NavLink } from "react-router-dom";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand" href="#" style={Textstyle}>
            Seven Eleven
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" style={Textstyle} to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={Textstyle} to={{pathname: "/products",data:''}}>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={Textstyle}  to={{pathname: "/item-list",data1:''}}>
                  Item list
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={Textstyle} to="/nearest-store">
                  Nearest Store
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
const Textstyle = {
  color: "#fff",
};