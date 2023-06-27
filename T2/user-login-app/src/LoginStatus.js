import React from 'react';
import { connect } from 'react-redux';
import { logout } from './actions';

const LoginStatus = ({ loggedIn, user, logout }) => {
  if (!loggedIn) {
    return <p>Please login.</p>;
  }

  return (
    <div>
      <p>Welcome, {user.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  user: state.user
});

export default connect(mapStateToProps, { logout })(LoginStatus);
