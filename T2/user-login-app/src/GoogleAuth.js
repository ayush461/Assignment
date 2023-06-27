import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleAuth = () => {
  const responseGoogle = (response) => {
    // Handle the response from Google Sign-In
    console.log(response);
  };

  return (
    <div>
      <h2> Google OAuth </h2>
      <GoogleLogin
        clientId="YOUR_CLIENT_ID"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleAuth;
