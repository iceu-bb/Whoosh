import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';
import SignOut from './SignOut';
import { Link } from 'react-router-dom';
import { orange, black } from '../../../utilities';
import { useTransition, animated, config } from 'react-spring';
import { useOnClickOutside } from '../../../helpers';

const UserLink = ({ className, userName, moved, logoutUser }) => {
  const [openPanel, setOpenPanel] = useState(false);

  const buttonRef = useRef();
  const panelRef = useRef();

  useOnClickOutside(panelRef, event => {
    if (!buttonRef.current.contains(event.target)) {
      setOpenPanel(false);
    }
  });

  const transition = useTransition(openPanel, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle
  });

  return (
    <div
      ref={buttonRef}
      className={className}
      onClick={() => {
        setOpenPanel(!openPanel);
      }}
    >
      <FaCaretDown
        className='link'
        style={{ marginTop: 3, fontSize: '2.5rem' }}
      />
      {transition.map(
        ({ item, key, props: animation }) =>
          item && (
            <>
              <animated.div ref={panelRef} className='panel' style={animation}>
                <ul className='panel-list'>
                  <li className='panel-list-item'>
                    <Link to='/user/my-categories'>Moje zestawy do nauki</Link>
                  </li>
                  <li className='panel-list-item'>
                    <Link to='/user/settings'>Ustawienia</Link>
                  </li>
                  <li className='panel-list-item'>
                    <Link to='/user/faq'>Pomoc</Link>
                  </li>
                  <li className='panel-list-item'>
                    <SignOut logoutUser={logoutUser} />
                  </li>
                </ul>
              </animated.div>
            </>
          )
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
    color: ${({ moved }) => (moved ? `${black}` : `${orange}`)};
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

  .panel-list {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .panel-list-item {
    width: 100%;
    font-size: 1.5rem;
    display: inline-block;
    white-space: nowrap;
    transition: all 0.3s ease;
    text-align: left;

    &:hover {
      background-color: #eee;
    }

    &:not(:last-child) {
      border-bottom: 0.5px solid #ddd;
    }

    &:last-child {
      padding: 10px 25px;
    }

    & > a {
      width: 100%;
      display: inline-block;
      padding: 10px 25px;
      text-decoration: none;
      color: inherit;
    }
  }
`;
