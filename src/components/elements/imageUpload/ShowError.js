import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  margin: 10px 0;
  font-size: 1.5rem;
  color: red;
`;

const ShowError = ({ error }) => <ErrorMessage>{error}</ErrorMessage>;

export default ShowError;
