import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    loginErrors: "",
    allFavorites: [],
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.history.push("/map");

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.props.handleLogin(json.user);
        localStorage.setItem("authToken", json.auth_token);
      });
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <input
            type="username"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <br />

          <button className="login-signup-buttons" type="submit">
            {" "}
            Login{" "}
          </button>
          {this.state.isInvalid && <div>Invalid Username or Password</div>}
        </form>
        <br />
        <Link to="/">homepage</Link> {"  🍻  "}
        <Link to="/signup">signup </Link>
      </div>
    );
  }
}
