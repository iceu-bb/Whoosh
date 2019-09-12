import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ButtonsContainer = ({ className, setIndex, index, length }) => {
  return (
    <div className={className}>
      <button
        style={{ padding: '30px' }}
        onClick={() => setIndex(index => (index - 1) % length)}
        disabled={index === 0}
      >
        <FaArrowLeft />
      </button>
      <p>
        {index + 1}/{length}
      </p>
      <button
        style={{ padding: '30px' }}
        onClick={() => setIndex(index => (index + 1) % length)}
        disabled={index + 1 === length}
      >
        <FaArrowRight />
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
