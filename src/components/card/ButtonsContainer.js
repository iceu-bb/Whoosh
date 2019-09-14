import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { orange } from '../../utilities';

const ButtonsContainer = ({ className, setIndex, index, length }) => {
  return (
    <div className={className}>
      <button
        className='arrow-button'
        onClick={() => setIndex(index => (index - 1) % length)}
        disabled={index === 0}
      >
        <FaArrowLeft />
      </button>
      <p class='counter'>
        {index + 1}/{length}
      </p>
      <button
        className='arrow-button'
        onClick={() => setIndex(index => (index + 1) % length)}
        disabled={index + 1 === length}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default styled(ButtonsContainer)`
  margin: 25px auto 200px;
  display: flex;
  align-items: center;
  width: 500px;
  justify-content: space-evenly;

  .counter {
    font-size: 2rem;
  }

  .arrow-button {
    padding: 10px;
    font-size: 2.5rem;
    font-weight: 300;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: ${orange};
    }

    :disabled {
      pointer-events: none;
    }
  }
`;
