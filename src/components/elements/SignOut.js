import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const SignOut = ({ logoutUser }) => {
  return <div onClick={() => logoutUser()}>Wyloguj się</div>;
};

export default SignOut;
