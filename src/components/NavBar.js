import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logo from "./hop_logo.png";

class NavBar extends Component {
  state = {
    users: [],
    name: "",
  };

  handleLogoutClick = () => {
    this.props.history.push("/");
    this.props.handleLogout();
  };

  render() {
    return (
      // <Router>
      <div className="navbar">
        {this.props.loggedInStatus !== "NOT_LOGGED_IN" ? (
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                {" "}
                <img
                  className="navbar-brand"
                  src={logo}
                  alt="beer map logo"
                  className="logo"
                ></img>{" "}
              </div>
              <b>Cheers, {this.props.user.username}!</b>
              <NavLink to="/map"> BREWERYMAP </NavLink>
              <NavLink to="/breweries"> BREWERIES </NavLink>
              <NavLink to="/favorites"> FAVORITES</NavLink>
              <a id="logout" href="#" onClick={this.handleLogoutClick}>
                LOGOUT
              </a>
            </div>
          </nav>
        ) : (
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <img src={logo} alt="beer map logo" className="logo"></img>{" "}
              </div>
            </div>
          </nav>
        )}
      </div>
    );
  }
}

export default NavBar;
