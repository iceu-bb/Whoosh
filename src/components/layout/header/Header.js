import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import Nav from './Nav';

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Link to='/' className='logo'>
        Fiszki
      </Link>
      <Nav />
    </header>
  );
};

export default styled(Header)`
  min-height: 80px;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  border-bottom: 1px solid #eee;

  .logo {
    display: inline-block;
    font-size: 2.5rem;
    font-weight: 500;
    text-decoration: none;
    color: inherit;
    padding: 10px;
  }
`;
