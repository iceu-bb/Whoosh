import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLockBodyScroll } from '../../../helpers';
import CategorySearch from '../../category/CategorySearch';
import SignOut from './SignOut';

const MobileMenuList = ({ className }) => {
  useLockBodyScroll();
  return (
    <ul className={className}>
      <li style={{ marginBottom: 20 }}>
        <CategorySearch mobile={true} />
      </li>
      <li className='menu-list-item'>
        <Link to='/add'>Dodaj zestaw</Link>
      </li>
      <li className='menu-list-item'>
        <Link to='/user/my-categories'>Moje zestawy do nauki</Link>
      </li>
      <li className='menu-list-item'>
        <Link to='/user/settings'>Ustawienia</Link>
      </li>
      <li className='menu-list-item'>
        <Link to='/user/faq'>Pomoc</Link>
      </li>
      <li className='menu-list-item'>
        <SignOut />
      </li>
    </ul>
  );
};

export default styled(MobileMenuList)`
  font-size: 2.5rem;
  width: 100vw;
  height: 90vh;
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
