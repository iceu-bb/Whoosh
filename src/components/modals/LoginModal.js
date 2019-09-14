import React from 'react';
import { connect } from 'react-redux';
import { animated } from 'react-spring';
import { Field, reduxForm } from 'redux-form';
import { closeModal } from '../../redux/modal/modalActionts';
import TextInputForm from '../elements/forms/TextInputForm';
import { loginUser, socialLogin } from '../../redux/auth/authActions';
import { Button } from '../elements/index';
import { useAnimationOnModal, useLockBodyScroll } from '../../helpers';

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

const LoginModal = ({
  closeModal,
  handleSubmit,
  loginUser,
  error,
  touched,
  pristine,
  socialLogin
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
                      <span>Zaloguj się </span>
                      <CloseButton
                        onClick={() => {
                          toggle(!on);
                          setTimeout(() => {
                            closeModal();
                          }, 200);
                        }}
                      >
                        x
                      </CloseButton>
                    </Header>
                    <SocialLoginWrapper onClick={() => socialLogin('google')}>
                      <SocialIcon
                        src='./assets/google-icon.png'
                        alt='google icon'
                      />
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
  { closeModal, loginUser, socialLogin }
)(reduxForm({ form: 'loginForm' })(LoginModal));
