import React from 'react';
import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const Loader = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  margin-right: 7px;
  margin-bottom: -3px;
  animation: rotate 1s linear infinite;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingButton = () => (
  <Loader>
    <FaSpinner />
  </Loader>
);
