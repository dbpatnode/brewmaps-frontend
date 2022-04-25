import React, { Component } from 'react';
import {
  arrow,
  userIcon,
  password,
  email,
  passwordConfirmationIcon,
} from '../../SVGs/svg';

export default class Registration extends Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, username, email, password, password_confirmation } =
      this.state;

    fetch('https://daniels-brewmaps-api.herokuapp.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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

    this.props.history.push('/map');
  };

  render() {
    return (
      <div>
        <form className='login' onSubmit={this.handleSubmit}>
          <fieldset>
            <legend className='legend'>SignUp</legend>
            <div className='input'>
              <input
                type='name'
                name='name'
                placeholder='Name'
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <span>
                <i className='fa fa-envelope-o'>{userIcon}</i>
              </span>
            </div>
            <div className='input'>
              <input
                type='username'
                name='username'
                placeholder='Username'
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
              <span>
                <i className='fa fa-envelope-o'>{userIcon}</i>
              </span>
            </div>

            <div className='input'>
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <span>
                <i>{email}</i>
              </span>
            </div>
            <div className='input'>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <span>
                <i className='fa fa-lock'>{password}</i>
              </span>
            </div>

            <div className='input'>
              <input
                type='password'
                name='password_confirmation'
                placeholder='Password Confirmation'
                value={this.state.password_confirmation}
                onChange={this.handleChange}
                required
              />
              <span>
                <i className='fa fa-lock'>{passwordConfirmationIcon}</i>
              </span>
            </div>
            <button className='submit' type='submit' value='Signup'>
              {arrow}
            </button>
          </fieldset>
        </form>
        <br />
      </div>
    );
  }
}
