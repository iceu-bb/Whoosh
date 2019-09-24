import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { closeModal, openModal } from '../../redux/modal/modalActionts';
import { useEscapeToCloseModal } from '../../helpers';
import { FaTimes } from 'react-icons/fa';
import {
  ModalWrapper,
  ModalInner,
  Header,
  CloseButton,
  Paragraph,
  Button
} from '../elements/index';
import { withRouter } from 'react-router';

const UnauthModal = ({ className, closeModal, history, openModal }) => {
  useEscapeToCloseModal(() => {
    history.goBack();
    closeModal();
  });
  return (
    <div className={className}>
      <ModalWrapper>
        <ModalInner>
          <Header>
            <span>Brak Autoryzacji</span>
            <CloseButton
              onClick={() => {
                history.goBack();
                closeModal();
              }}
            >
              <FaTimes />
            </CloseButton>
          </Header>
          <div className='content'>
            <Paragraph modifiers='feature'>
              Nie możesz zobaczyć tej strony. Tylko zalogowani użytkownicy mają
              dostęp.
            </Paragraph>

            <div className='buttons-container'>
              <Button
                modifiers='white'
                onClick={() => {
                  closeModal();
                  openModal('LoginModal', null);
                }}
              >
                Zaloguj się
              </Button>
              <Button
                onClick={() => {
                  closeModal();
                  openModal('RegisterModal', null);
                }}
              >
                Zarejestruj się
              </Button>
            </div>
          </div>
        </ModalInner>
      </ModalWrapper>
    </div>
  );
};

export default styled(
  withRouter(
    connect(
      null,
      { closeModal, openModal }
    )(UnauthModal)
  )
)`
  .content {
    margin: 0 auto;
    width: 90%;
    padding: 15px 0;
    text-align: center;
  }

  .buttons-container {
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
  }
`;
