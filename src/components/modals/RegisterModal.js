import React from 'react';
import { connect } from 'react-redux';
import { animated } from 'react-spring';
import { Field, reduxForm } from 'redux-form';
import { closeModal } from '../../redux/modal/modalActionts';
import TextInputForm from '../elements/forms/TextInputForm';
import { registerAccount, socialLogin } from '../../redux/auth/authActions';
import { useAnimationOnModal, useLockBodyScroll } from '../../helpers';
import { Button } from '../elements/index';
import { FaTimes } from 'react-icons/fa';
import {
  ModalWrapper,
  ModalInner,
  Header,
  SocialLoginWrapper,
  SocialIcon,
  StyledForm,
  SubmissionError,
  CloseButton
} from '../elements/index';

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

const RegisterModal = ({
  closeModal,
  handleSubmit,
  registerAccount,
  socialLogin,
  invalid,
  submitting,
  pristine,
  error
}) => {
  useLockBodyScroll();
  const [on, toggle, transition, opacityAnimate] = useAnimationOnModal();
  return (
    <animated.div style={opacityAnimate}>
      <ModalWrapper>
        {transition.map(
          ({ item, key, props: animation }) =>
            item && (
              <>
                <animated.div style={animation}>
                  <ModalInner>
                    <Header>
                      <span>Zarejestruj się </span>
                      <CloseButton
                        onClick={() => {
                          toggle(!on);
                          setTimeout(() => {
                            closeModal();
                          }, 200);
                        }}
                      >
                        <FaTimes />
                      </CloseButton>
                    </Header>
                    <SocialLoginWrapper onClick={() => socialLogin('google')}>
                      <SocialIcon
                        src='./assets/google-icon.png'
                        alt='google icon'
                      />
                      Kontynuuj przez Google
                    </SocialLoginWrapper>
                    <StyledForm onSubmit={handleSubmit(registerAccount)}>
                      <Field
                        name='email'
                        component={TextInputForm}
                        type='text'
                        placeholder='adres e-mail'
                        label='adres e-mail'
                        ownClassName='login-input'
                      />
                      <Field
                        name='password'
                        component={TextInputForm}
                        type='password'
                        placeholder='hasło'
                        label='hasło'
                        ownClassName='login-input'
                      />
                      <Field
                        name='displayName'
                        component={TextInputForm}
                        type='text'
                        placeholder='nazwa użytkownika'
                        label='nazwa użytkownika'
                        ownClassName='login-input'
                      />
                      {error && (
                        <span
                          style={{
                            fontSize: '1.6rem',
                            color: 'red',
                            margin: 10
                          }}
                        >
                          {error}
                        </span>
                      )}
                      <Button
                        type='submit'
                        disabled={invalid || submitting || pristine}
                      >
                        Zarejestruj konto
                      </Button>
                    </StyledForm>
                  </ModalInner>
                </animated.div>
              </>
            )
        )}
      </ModalWrapper>
    </animated.div>
  );
};

export default connect(
  null,
  { closeModal, registerAccount, socialLogin }
)(reduxForm({ form: 'registerForm', validate })(RegisterModal));
