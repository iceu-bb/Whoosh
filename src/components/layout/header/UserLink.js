import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';
import SignOut from './SignOut';
import { Link } from 'react-router-dom';

const UserLink = ({ className, userName, moved, logoutUser }) => {
  const [openPanel, setOpenPanel] = useState(false);
  return (
    <div
      className={className}
      onClick={() => {
        setOpenPanel(!openPanel);
      }}
    >
      <FaCaretDown className='link' style={{ fontSize: '2.5rem' }} />
      {openPanel && (
        <div className='panel'>
          <ul className='list'>
            <li className='list-item'>
              <Link to='/user/my-categories'>Moje zestawy do nauki</Link>
            </li>
            <li className='list-item'>
              <Link to='/user/settings'>Ustawienia</Link>
            </li>
            <li className='list-item'>
              <Link to='/user/faq'>Pomoc</Link>
            </li>
            <li className='list-item'>
              <SignOut logoutUser={logoutUser} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default styled(UserLink)`
  /* same style like link put it to one styled comp */
  color: inherit;
  font-size: 1.8rem;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  z-index: 30;

  .panel {
    background: #fff;
    position: absolute;
    top: 58px;
    right: 0;
    color: ${({ moved }) => (moved ? 'black' : 'orange')};
    border-radius: 6px;
    border: 0.5px solid #ddd;

    &::before {
      content: '';
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 15px solid #fff;
      position: absolute;
      top: -18px;
      right: 0px;
    }
  }

  .list {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .list-item {
    font-size: 1.5rem;
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    padding: 10px 30px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #eee;
    }

    & > a {
      text-decoration: none;
      color: inherit;
    }
  }

  .list-item:not(:last-child) {
    border-bottom: 0.5px solid #ddd;
  }
`;
