import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { closeModal } from '../../redux/modal/modalActionts';
import TextInputForm from '../../components/elements/forms/TextInputForm';
import { registerAccount } from '../../redux/auth/authActions';

const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalInner = styled.div`
  min-width: 300px;
  min-height: 250px;
  background-color: #fff;
`;

const RegisterModal = ({ closeModal, handleSubmit, registerAccount }) => {
  return (
    <ModalWrapper>
      <ModalInner>
        <button onClick={() => closeModal()}>Zamknij Modal</button>
        <form onSubmit={handleSubmit(registerAccount)}>
          <Field
            name='email'
            component={TextInputForm}
            type='text'
            placeholder='adres e-mail'
            label='adres e-mail'
          />
          <Field
            name='password'
            component={TextInputForm}
            type='password'
            placeholder='hasło'
            label='hasło'
          />
          <Field
            name='displayName'
            component={TextInputForm}
            type='text'
            placeholder='nazwa użytkownika'
            label='nazwa użytkownika'
          />
          <button type='submit'>Zarejestruj konto</button>
        </form>
      </ModalInner>
    </ModalWrapper>
  );
};

export default connect(
  null,
  { closeModal, registerAccount }
)(reduxForm({ form: 'registerForm' })(RegisterModal));
