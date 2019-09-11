import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { closeModal } from '../../redux/modal/modalActionts';
import TextInputForm from '../../components/elements/forms/TextInputForm';

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

const LoginModal = ({ closeModal, handleSubmit }) => {
  return (
    <ModalWrapper>
      <ModalInner>
        <button onClick={() => closeModal()}>Zamknij Modal</button>
        <form
          onSubmit={handleSubmit(() => {
            console.log('logged');
          })}
        >
          <Field
            name='email'
            component={TextInputForm}
            type='text'
            placeholder='Email Address'
          />
          <Field
            name='password'
            component={TextInputForm}
            type='password'
            placeholder='Password'
          />
          <button type='submit'>Zaloguj się</button>
        </form>
      </ModalInner>
    </ModalWrapper>
  );
};

export default connect(
  null,
  { closeModal }
)(reduxForm({ form: 'loginForm' })(LoginModal));
