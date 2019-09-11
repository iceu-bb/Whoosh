import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { blue, yellow } from '../../utilities';
import { openModal } from '../../redux/modal/modalActionts';

const Header = ({ className, openModal }) => {
  return (
    <header className={className}>
      <Link to='/' className='logo'>
        Fiszki
      </Link>
      <nav>
        <ul className='list'>
          <li>
            <NavLink to='/test' className='link'>
              Test Page
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' className='link'>
              Dodaj fiszkę
            </NavLink>
          </li>
          <li>
            <div className='link' onClick={() => openModal('LoginModal', null)}>
              Zaloguj się
            </div>
          </li>
          <li>
            <div
              className='link'
              onClick={() => openModal('RegisterModal', null)}
            >
              Zarejestruj się
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default styled(
  connect(
    null,
    { openModal }
  )(Header)
)`
  min-height: 70px;
  background-color: ${blue};
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;

  .logo {
    display: inline-block;
    font-size: 2rem;
    text-decoration: none;
    color: inherit;
    padding: 10px;
  }

  .list {
    list-style-type: none;
    display: flex;
  }

  .list > li {
    padding: 10px 20px;
  }

  .link {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: ${yellow};
    }
  }
`;
