import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { yellow, gradientMain } from '../../../utilities';
import { Button } from '../../elements';
import { openModal } from '../../../redux/modal/modalActionts';
import { logoutUser } from '../../../redux/auth/authActions';
import CategorySearch from '../../category/CategorySearch';
import UserLink from './UserLink';

const Nav = ({ className, moved, openModal, auth, profile, logoutUser }) => {
  const isAuthenticated = auth.isLoaded && !auth.isEmpty;
  const userName = profile.displayName;
  return (
    <nav className={className}>
      <ul className={moved ? 'list black' : 'list'}>
        <li>
          <CategorySearch moved={moved} />
        </li>
        <li>
          <NavLink to='/add' className='link'>
            Dodaj zestaw
          </NavLink>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <div
                className='link'
                onClick={() => openModal('LoginModal', null)}
              >
                Zaloguj się
              </div>
            </li>
            <li>
              <div
                className='link'
                onClick={() => openModal('RegisterModal', null)}
              >
                <Button
                  modifiers='nav'
                  className={moved ? 'orange-background' : ''}
                >
                  Zarejestruj się
                </Button>
              </div>
            </li>
          </>
        )}

        {isAuthenticated && (
          <li>
            <UserLink
              logoutUser={logoutUser}
              userName={userName}
              moved={moved}
            />
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

export default styled(
  connect(
    mapStateToProps,
    { openModal, logoutUser }
  )(Nav)
)`
  .list {
    list-style-type: none;
    display: flex;
    align-items: center;
  }

  .black {
    color: #000;
  }

  .orange-background {
    border: none;
    ${gradientMain};
  }

  .list > li {
    padding: 10px 20px;
  }

  .link {
    color: inherit;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    z-index: 30;
    transition: all 0.3s ease;

    &:hover {
      color: ${yellow};
    }
  }
`;
