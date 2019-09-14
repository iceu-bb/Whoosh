import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { closeModal } from '../../redux/modal/modalActionts';
import TextInputForm from '../../components/elements/forms/TextInputForm';
import { loginUser, socialLogin } from '../../redux/auth/authActions';
import { Button } from './index';

import {
  ModalWrapper,
  ModalInner,
  Header,
  SocialLoginWrapper,
  SocialIcon,
  StyledForm,
  SubmissionError,
  CloseButton
} from './index';

const LoginModal = ({
  closeModal,
  handleSubmit,
  loginUser,
  error,
  touched,
  pristine,
  socialLogin
}) => {
  return (
    <ModalWrapper>
      <ModalInner>
        <Header>
          <span>Zaloguj się </span>
          <CloseButton onClick={() => closeModal()}>x</CloseButton>
        </Header>
        <SocialLoginWrapper onClick={() => socialLogin('google')}>
          <SocialIcon src='./assets/google-icon.png' alt='google icon' />
          Zaloguj sie przez Google
        </SocialLoginWrapper>
        <StyledForm onSubmit={handleSubmit(loginUser)}>
          <Field
            name='email'
            component={TextInputForm}
            type='text'
            label='Nazwa użytkownika'
            placeholder='Wprowadź nazwę użytkownika'
            ownClassName='login-input'
          />
          <Field
            name='password'
            component={TextInputForm}
            type='password'
            label='Hasło'
            placeholder='Wprowadź swoje hasło'
            ownClassName='login-input'
          />
          {error && <SubmissionError>{error}</SubmissionError>}
          <Button type='submit' disabled={touched || pristine}>
            Zaloguj się
          </Button>
        </StyledForm>
      </ModalInner>
    </ModalWrapper>
  );
};

export default connect(
  null,
  { closeModal, loginUser, socialLogin }
)(reduxForm({ form: 'loginForm' })(LoginModal));
