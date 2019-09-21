import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { yellow, gradientMain, below } from '../../../utilities';
import { Button } from '../../elements';
import { openModal } from '../../../redux/modal/modalActionts';
import { logoutUser } from '../../../redux/auth/authActions';
import CategorySearch from '../../category/CategorySearch';
import UserLink from './UserLink';
import MobileMenu from './MobileMenu';

const Nav = ({ className, moved, openModal, auth, profile, logoutUser }) => {
  const isAuthenticated = auth.isLoaded && !auth.isEmpty;
  const userName = profile.displayName;
  return (
    <nav className={className}>
      <ul className={moved ? 'list black' : 'list'}>
        <li>
          <CategorySearch moved={moved} className='hide-medium' />
        </li>
        <li>
          <NavLink to='/add' className='link hide-medium'>
            Dodaj zestaw
          </NavLink>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <div
                className='link smaller-sm'
                onClick={() => openModal('LoginModal', null)}
              >
                Zaloguj się
              </div>
            </li>
            <li>
              <div
                className='link smaller-sm'
                onClick={() => openModal('RegisterModal', null)}
              >
                <Button
                  modifiers='nav'
                  className={
                    moved ? 'btn-phone orange-background' : 'btn-phone'
                  }
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
              className='hide-medium'
              logoutUser={logoutUser}
              userName={userName}
              moved={moved}
            />
          </li>
        )}
        {isAuthenticated && (
          <li class='mobile-menu'>
            <MobileMenu />
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

  .link {
    padding: 10px 20px;
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

  .smaller-sm {
    ${below.small`
    padding: 10px 20px;
    `}
    ${below.phone`
    padding: 5px 10px;
    `}
    ${below.ultraSmallPhone`
      text-align: center;
    `}
  }

  .btn-phone {
    ${below.phone`
    padding: 10px 15px;
    font-size: 1.3rem;
    `}
  }

  .hide-medium {
    ${below.smallMed`
    display: none;
    padding: 0;
    `}
  }

  .mobile-menu{
    display: none;
    ${below.smallMed`
      display: inline-block;
      `}
  }
`;
