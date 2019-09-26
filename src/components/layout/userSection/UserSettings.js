import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updatePassword } from '../../../redux/auth/authActions';
import { Field, reduxForm } from 'redux-form';
import { passwordChangeValidator } from '../../../helpers';
import { HeadingH2, Button, Paragraph, TextInputForm } from '../../elements';
import SEO from '../../../SEO';

const SettingsContainer = styled.section`
  margin: 0 auto;
  max-width: 500px;
  padding: 100px 20px;
  text-align: center;
`;

const Form = styled.form`
  margin: 70px auto 0;
  padding: 0 10px;
  max-width: 400px;
`;

const UserSettings = ({
  handleSubmit,
  invalid,
  submitting,
  pristine,
  error,
  updatePassword,
  providerId
}) => {
  return (
    <SettingsContainer>
      <SEO title='Ustawienia' />
      <HeadingH2>Ustawienia</HeadingH2>
      {providerId && providerId === 'password' && (
        <Form onSubmit={handleSubmit(updatePassword)}>
          <Field
            name='password1'
            component={TextInputForm}
            type='password'
            placeholder='Wpisz nowe hasło'
            label='Nowe hasło'
            ownClassName='classic-input'
          />
          <Field
            name='password2'
            component={TextInputForm}
            type='password'
            placeholder='Potwierdź nowe hasło'
            label='Potwierdź hasło'
            ownClassName='classic-input'
          />
          {error && <span>{error}</span>}
          <Button type='submit' disabled={invalid || submitting || pristine}>
            Zmień hasło
          </Button>
        </Form>
      )}

      {providerId && providerId === 'google.com' && (
        <Paragraph modifiers='feature'>
          Zarządzaj swoim kontem bezpośrednio w serwisie google
        </Paragraph>
      )}
    </SettingsContainer>
  );
};

const mapStateToProps = state => ({
  providerId: state.firebase.auth.providerData[0].providerId
});

export default connect(
  mapStateToProps,
  { updatePassword }
)(
  reduxForm({ form: 'passwordChange', validate: passwordChangeValidator })(
    UserSettings
  )
);
