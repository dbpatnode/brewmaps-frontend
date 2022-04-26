import React, { Component } from 'react';

import { arrow, userIcon, password } from '../../SVGs/svg';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    loginErrors: '',
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
    const { history, handleLogin } = this.props;
    history.push('/map');

    fetch('https://daniels-brewmaps-api.herokuapp.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        handleLogin(json.user);
        localStorage.setItem('authToken', json.auth_token);
      });
  };

  render() {
    return (
      <div>
        <form className='login' onSubmit={this.handleSubmit}>
          <fieldset>
            <legend className='legend'>Login</legend>
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

            <button className='submit' type='submit'>
              {arrow}
            </button>
            {this.state.isInvalid && <div>Invalid Username or Password</div>}
          </fieldset>
        </form>
        <br />
      </div>
    );
  }
}
