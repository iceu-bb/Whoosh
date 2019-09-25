import React from 'react';
import { connect } from 'react-redux';
import { animated } from 'react-spring';
import { Field, reduxForm } from 'redux-form';
import { closeModal } from '../../redux/modal/modalActionts';
import TextInputForm from '../elements/forms/TextInputForm';
import { registerAccount, socialLogin } from '../../redux/auth/authActions';
import {
  useAnimationOnModal,
  useLockBodyScroll,
  useEscapeToCloseModal,
  registerValidator
} from '../../helpers';
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
  useEscapeToCloseModal(closeModal);
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
                        aria-label='Close Button'
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
                    <SocialLoginWrapper
                      aria-label='Google Login'
                      onClick={() => socialLogin('google')}
                    >
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
                        ownClassName='classic-input'
                      />
                      <Field
                        name='password'
                        component={TextInputForm}
                        type='password'
                        placeholder='hasło'
                        label='hasło'
                        ownClassName='classic-input'
                      />
                      <Field
                        name='displayName'
                        component={TextInputForm}
                        type='text'
                        placeholder='nazwa użytkownika'
                        label='nazwa użytkownika'
                        ownClassName='classic-input'
                      />
                      {error && <SubmissionError>{error}</SubmissionError>}
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
)(
  reduxForm({ form: 'registerForm', validate: registerValidator })(
    RegisterModal
  )
);
