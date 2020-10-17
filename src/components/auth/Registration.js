import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Registration extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       name: "",
  //       username: "",
  //       email: "",
  //       password: "",
  //       password_confirmation: "",
  //       registrationErrors: "",
  //     };
  //     this.handleSubmit = this.handleSubmit.bind(this);

  //     this.handleChange = this.handleChange.bind(this);
  //   }

  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    registrationErrors: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      username,
      email,
      password,
      password_confirmation,
    } = this.state;

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          name: name,
          username: username,
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        },
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.props.handleLogin(json);
      });

    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="signup">
        <form onSubmit={this.handleSubmit}>
          <input
            type="name"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <br />

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
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
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

          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
          <br />

          <button className="login-signup-buttons" type="submit" value="Signup">
            {" "}
            Sign Up{" "}
          </button>
        </form>
        <br />
        <Link to="/">homepage</Link> {"  🍻  "}
        <Link to="/login">login </Link>
      </div>
    );
  }
}
