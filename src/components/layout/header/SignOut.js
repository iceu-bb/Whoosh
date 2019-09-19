import React from 'react';
import { withRouter } from 'react-router-dom';

const SignOut = ({ logoutUser, history }) => {
  return (
    <div
      onClick={() => {
        logoutUser();
        history.push('/goodbye');
      }}
    >
      Wyloguj się
    </div>
  );
};

export default withRouter(SignOut);
