import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(credentials) {
  return fetch('http://localhost:3002/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then(data => data.json());
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    console.log('Checking login information');
    e.preventDefault();
    const token = loginUser({
      username,
      password,
    });
    setToken(await token);
  };

  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui image header">
          <div className="content">Log-in to your account</div>
        </h2>
        <form className="ui large form" onSubmit={handleSubmit}>
          <div className="ui stacked secondary segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button className="ui fluid large teal submit button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.prototypes = {
  setToken: PropTypes.func.isRequired,
};
