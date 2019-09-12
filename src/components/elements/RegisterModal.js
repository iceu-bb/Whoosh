import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { closeModal } from '../../redux/modal/modalActionts';
import TextInputForm from '../../components/elements/forms/TextInputForm';
import { registerAccount } from '../../redux/auth/authActions';
import {
  composeValidators,
  combineValidators,
  isRequired,
  createValidator,
  hasLengthGreaterThan,
  hasLengthBetween
} from 'revalidate';

const isValidEmail = createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message;
    }
  },
  'Nieprawidłowy adres email'
);

const isMinimumOneCipher = createValidator(
  message => value => {
    if (value && !/^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/i.test(value)) {
      return message;
    }
  },
  'Hasło musi zawierać przynajmniej jedną cyfre'
);

const validate = combineValidators({
  email: composeValidators(
    isRequired({ message: 'email jest wymagany' }),
    isValidEmail
  )(),
  password: composeValidators(
    isRequired({ message: 'hasło jest wymagane' }),
    hasLengthGreaterThan(7)({
      message: 'Hasło musi mieć minimum 8 znaków'
    }),
    isMinimumOneCipher
  )(),
  displayName: composeValidators(
    isRequired({ message: 'Nazwa użytkownika jest wymagana' }),
    hasLengthBetween(2, 32)({
      message: 'Nazwa musi składać się z minimum 3 znaków, maksymalnie 32 znaki'
    })
  )()
});

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

const RegisterModal = ({
  closeModal,
  handleSubmit,
  registerAccount,
  invalid,
  submitting,
  pristine,
  error
}) => {
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
          {error && <span>{error}</span>}
          <button type='submit' disabled={invalid || submitting || pristine}>
            Zarejestruj konto
          </button>
        </form>
      </ModalInner>
    </ModalWrapper>
  );
};

export default connect(
  null,
  { closeModal, registerAccount }
)(reduxForm({ form: 'registerForm', validate })(RegisterModal));
