import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { searchCategory } from '../../redux/category/actions';
import { FaSearch } from 'react-icons/fa';
import { CloseButton } from '../elements';
import { withRouter } from 'react-router-dom';

const CategorySearch = ({ className, history, searchCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = value => setInputValue(value);
  const handleKeyPress = key => key === 'Enter' && handleSearch(inputValue);
  const handleSearch = value => {
    if (value) {
      searchCategory(value);
      history.push('/search');
    } else {
      window.alert('wprowadz wartosc');
    }
  };
  return (
    <div className={className}>
      <div className='input-container'>
        <input
          className='input'
          type='text'
          placeholder='Szukaj zestawu'
          onChange={e => handleChange(e.target.value)}
          onKeyDown={e => handleKeyPress(e.key)}
        />
        <CloseButton
          className='search-icon'
          onClick={() => handleSearch(inputValue)}
        >
          <FaSearch />
        </CloseButton>
      </div>
    </div>
  );
};

export default styled(
  withRouter(
    connect(
      null,
      { searchCategory }
    )(CategorySearch)
  )
)`
  font-size: 2rem;
  z-index: 30;
  position: relative;

  .input-container {
    display: inline-block;
  }

  .input {
    background-color: ${({ moved }) => (moved ? '#ccc' : 'inherit')};
    border: ${({ moved }) => (moved ? 'none' : '1px solid #fff')};
    color: inherit;
    font-size: 1.5rem;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    padding: 0 50px 0 20px;
    transition: width 0.5s ease;

    &:focus {
      width: 250px;
    }
  }

  .search-icon {
    color: inherit;
    position: absolute;
    right: 10px;
    top: 0;
    border: none;
    transition: all 0.2s ease;

    &:hover {
      background-color: inherit;
      transform: scale(1.1);
    }
  }
`;
