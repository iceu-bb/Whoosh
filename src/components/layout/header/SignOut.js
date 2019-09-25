import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../../redux/auth/authActions';

const SignOut = ({ logoutUser, history }) => {
  return (
    <div
      tabIndex={0}
      aria-label='Log out'
      role='button'
      onClick={() => {
        logoutUser();
        history.push('/goodbye');
      }}
    >
      Wyloguj się
    </div>
  );
};

export default withRouter(
  connect(
    null,
    { logoutUser }
  )(SignOut)
);
