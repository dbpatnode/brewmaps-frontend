import React, { useState } from 'react';
import {
  arrow,
  userIcon,
  password as passwordIcon,
  email as emailIcon,
  passwordConfirmationIcon,
} from '../../SVGs/svg';

const Registration = ({ history, handleLogin }) => {
  const [inputs, setInputs] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const { name, username, email, password, password_confirmation } = inputs;
  const handleSubmit = (e) => {
    e.preventDefault();

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
        console.log(json);
        handleLogin(json);
        localStorage.setItem('authToken', json.auth_token);
      });

    history.push('/');
  };

  return (
    <div>
      <form className='login' onSubmit={handleSubmit}>
        <fieldset>
          <legend className='legend'>SignUp</legend>
          <div className='input'>
            <input
              type='name'
              name='name'
              placeholder='Name'
              value={name}
              onChange={handleChange}
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
              value={username}
              onChange={handleChange}
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
              value={email}
              onChange={handleChange}
              required
            />
            <span>
              <i>{emailIcon}</i>
            </span>
          </div>
          <div className='input'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={handleChange}
              required
            />
            <span>
              <i className='fa fa-lock'>{passwordIcon}</i>
            </span>
          </div>

          <div className='input'>
            <input
              type='password'
              name='password_confirmation'
              placeholder='Password Confirmation'
              value={password_confirmation}
              onChange={handleChange}
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
};

export default Registration;
