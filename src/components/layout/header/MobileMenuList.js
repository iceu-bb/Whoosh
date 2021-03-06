import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLockBodyScroll } from '../../../helpers';
import CategorySearch from '../../category/CategorySearch';
import SignOut from './SignOut';

const MobileMenuList = memo(({ className, setMenuOpen }) => {
  useLockBodyScroll();
  return (
    <ul className={className}>
      <li style={{ marginBottom: 20 }}>
        <CategorySearch mobile={true} setMenuOpen={setMenuOpen} />
      </li>
      <li className='menu-list-item'>
        <Link to='/add' onClick={() => setMenuOpen(false)}>
          Dodaj zestaw
        </Link>
      </li>
      <li className='menu-list-item'>
        <Link to='/user/my-categories' onClick={() => setMenuOpen(false)}>
          Moje zestawy do nauki
        </Link>
      </li>
      <li className='menu-list-item'>
        <Link to='/user/settings' onClick={() => setMenuOpen(false)}>
          Ustawienia
        </Link>
      </li>
      <li className='menu-list-item'>
        <Link to='/user/faq' onClick={() => setMenuOpen(false)}>
          Pomoc
        </Link>
      </li>
      <li className='menu-list-item'>
        <SignOut />
      </li>
    </ul>
  );
});

export default styled(MobileMenuList)`
  font-size: 2.5rem;
  width: 100vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  color: orange;

  &:not(:first-child) {
    margin-top: 30px;
  }

  .menu-list-item {
    padding: 23px 10px;

    & > a {
      text-decoration: none;
      color: inherit;
    }
  }
`;
