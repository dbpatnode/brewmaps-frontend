import React, { useState } from 'react';
import { arrow, userIcon, password as passwordIcon } from '../../SVGs/svg';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Login = ({ history, handleLogin }) => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = inputs;

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
        history.push('/map');
      })
      .catch((error) => {
        console.error('Error:', error);
        if (error) {
          setError(true);
        }
      });
  };

  const { username, password } = inputs;
  return (
    <div>
      {error && <ErrorMessage message={'Invalid username or password.'} />}
      <div>
        <form className='login' onSubmit={handleSubmit}>
          <fieldset>
            <legend className='legend'>Login</legend>
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

            <button className='submit' type='submit'>
              {arrow}
            </button>
          </fieldset>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Login;
