import React from 'react';
import styled from 'styled-components';

const SignOut = ({ logoutUser }) => {
  return (
    <div className='link' onClick={() => logoutUser()}>
      Wyloguj się
    </div>
  );
};

export default SignOut;
