import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from './actions';

const LoginForm = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login validation and fetch user data
    // ...

    // Simulate successful login
    const user = {
      username,
      // ...
    };

    // Dispatch the login action
    login(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default connect(null, { login })(LoginForm);
