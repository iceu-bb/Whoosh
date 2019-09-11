import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ButtonsContainer = ({ className, setIndex, index }) => {
  return (
    <div className={className}>
      <button onClick={() => setIndex(index => (index - 1) % 4)}>
        <FaArrowLeft />
      </button>
      <p>2/24</p>
      <button>
        <FaArrowRight onClick={() => setIndex(index => (index + 1) % 4)} />
      </button>
    </div>
  );
};

export default styled(ButtonsContainer)`
  background-color: salmon;
  display: flex;
  max-width: 300px;
  justify-content: space-evenly;
`;
