import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  height: 100%;
  max-width: 100vh;

  &:after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #000;
    border-color: #000 transparent orange transparent;
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingComponent = () => {
  return <Loader></Loader>;
};
