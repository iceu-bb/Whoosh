import React from 'react';

const SignOut = ({ logoutUser }) => {
  return <div onClick={() => logoutUser()}>Wyloguj się</div>;
};

export default SignOut;
