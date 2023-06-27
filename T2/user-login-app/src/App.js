import React from 'react';
import LoginForm from './LoginForm';
import LoginStatus from './LoginStatus';
import GoogleAuth from './GoogleAuth';

const App = () => {
  return (
    <div class="ok">
      <h1> User Login</h1>
      <GoogleAuth />
      <LoginForm />
      <LoginStatus />
    </div>
  );
};

export default App;


