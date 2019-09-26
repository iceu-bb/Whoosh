import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { searchCategory } from '../../redux/category/categoryActions';
import { FaSearch } from 'react-icons/fa';
import { CloseButton } from '../elements';
import { below } from '../../utilities';
import { withRouter } from 'react-router-dom';

const CategorySearch = memo(
  ({ className, history, searchCategory, mobile, setMenuOpen }) => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = value => setInputValue(value);
    const handleKeyPress = key => key === 'Enter' && handleSearch(inputValue);
    const handleSearch = value => {
      if (value) {
        searchCategory(value.trim());
        setMenuOpen && setMenuOpen(false);
        history.push('/search');
      } else {
        window.alert('Wpisz coś, żeby wyszukać zestaw.');
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
  }
);

export default styled(
  withRouter(
    connect(
      null,
      { searchCategory }
    )(CategorySearch)
  )
)`
  padding: 10px 20px;

  .input-container {
    font-size: 2rem;
    z-index: 30;
    display: inline-block;
    position: relative;
  }

  .input {
    background-color: ${({ moved }) => (moved ? '#ccc' : 'inherit')};
    border: ${({ moved }) => (moved ? 'none' : '1px solid #fff')};
    border: ${({ mobile }) => mobile && '1px solid orange'};
    color: inherit;
    font-size: 1.5rem;
    font-size: ${({ mobile }) => mobile && '1.8rem'};
    width: ${({ mobile }) => (mobile ? '250px' : '200px')};
    height: 40px;
    border-radius: 20px;
    padding: 0 50px 0 20px;
    transition: width 0.5s ease;

    &:focus {
      width: 250px;
      ${below.medium`
      width: 220px;
      `}
      ${below.smallMed`
      width: 250px;
      `}
    }

    &::placeholder {
      color: ${({ mobile }) => (mobile ? '#ddd' : 'inherit')};
    }
  }

  .search-icon {
    color: inherit;
    position: absolute;
    right: 10px;
    top: 0;
    border: none;
    transition: all 0.2s ease;
    will-change: transform;

    &:hover {
      background-color: inherit;
      transform: scale(1.1);
    }
  }
`;
