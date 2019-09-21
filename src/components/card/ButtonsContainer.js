import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { orange, below } from '../../utilities';

const ButtonsContainer = ({ className, setIndex, index, length }) => {
  useEffect(() => {
    window.addEventListener('keyup', handleKeyPress);
    return () => {
      window.removeEventListener('keyup', handleKeyPress);
    };
  }, []);

  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);

  const handleCardMoveLeft = () => {
    setIndex(index => (index - 1) % length);
  };
  const handleCardMoveRight = () => {
    setIndex(index => (index + 1) % length);
  };

  const handleKeyPress = ({ key }) => {
    if (key === 'ArrowRight') {
      rightButtonRef.current.click();
    } else if (key === 'ArrowLeft') {
      leftButtonRef.current.click();
    }
  };

  return (
    <div className={className}>
      <button
        ref={leftButtonRef}
        className='arrow-button'
        onClick={() => handleCardMoveLeft()}
        disabled={index === 0}
      >
        <FaArrowLeft />
      </button>
      <p class='counter'>
        {index + 1}/{length}
      </p>
      <button
        ref={rightButtonRef}
        className='arrow-button'
        onClick={() => handleCardMoveRight()}
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
  padding: 0 20px;
  align-items: center;
  max-width: 500px;
  justify-content: space-evenly;

  ${below.smallMed`
    margin: 25px auto 100px;
  `}

  .counter {
    font-size: 2rem;
  }

  .arrow-button {
    padding: 10px;
    font-size: 3rem;
    ${below.smallMed`
     font-size: 2.5rem;
  `}
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
