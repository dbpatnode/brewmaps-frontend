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

    fetch("https://daniels-brewmaps-api.herokuapp.com/login", {
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
    const arrow = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-arrow-right"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        />
      </svg>
    );

    const userIcon = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-person-circle"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
        <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path
          fill-rule="evenodd"
          d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
        />
      </svg>
    );

    const password = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-lock"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
        />
      </svg>
    );
    return (
      <div>
        <form className="login" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend className="legend">Login</legend>
            <div className="input">
              <input
                type="username"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
              <span>
                <i className="fa fa-envelope-o">{userIcon}</i>
              </span>
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <span>
                <i className="fa fa-lock">{password}</i>
              </span>
            </div>

            <button className="submit" type="submit">
              {arrow}
            </button>
            {this.state.isInvalid && <div>Invalid Username or Password</div>}
          </fieldset>
        </form>
        <br />
        <div className="route-links">
          <Link to="/">homepage</Link> {"  🍻  "}
          <Link to="/signup">signup </Link>
        </div>
      </div>
    );
  }
}
