import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import TextInputForm from '../elements/forms/TextInputForm';
// import SelectInputForm from '../elements/forms/SelectInputForm';
import { addCard } from '../../redux/category/actions';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthBetween
} from 'revalidate';
import { HeadingH3, Button } from '../elements';

const validate = combineValidators({
  english: composeValidators(
    isRequired({ message: 'Podaj angielską wersję' }),
    hasLengthBetween(3, 150)({
      message: 'Wymagane minimum 3 znaki, maksymalnie 150 znaków'
    })
  )(),
  polish: composeValidators(
    isRequired({ message: 'Podaj polską wersję' }),
    hasLengthBetween(3, 150)({
      message: 'Wymagane minimum 3 znaki, maksymalnie 150 znaków'
    })
  )()
});

const AddCard = ({
  handleSubmit,
  error,
  invalid,
  pristine,
  submitting,
  reset,
  addCard,
  categoryName,
  className
}) => {
  return (
    <div className={className} style={{}}>
      <HeadingH3 modifiers='medium'>Dodaj fiszkę do zestawu</HeadingH3>
      <form
        className='form'
        onSubmit={handleSubmit(values => {
          addCard(values, categoryName);
          reset();
        })}
      >
        <Field
          name='english'
          component={TextInputForm}
          type='text'
          placeholder='angielska wersja'
          label='angielska wersja'
          ownClassName='login-input'
        />
        <Field
          name='polish'
          component={TextInputForm}
          type='text'
          placeholder='polska wersja'
          label='polska wersja'
          ownClassName='login-input'
        />
        {error && <span>{error}</span>}
        <Button type='submit' disabled={invalid || submitting || pristine}>
          Dodaj Fiszkę
        </Button>
      </form>
    </div>
  );
};

export default styled(
  connect(
    null,
    { addCard }
  )(reduxForm({ form: 'registerNewCard', validate })(AddCard))
)`
  padding: 0 7% 50px;

  .form {
    margin: 20px auto;
    max-width: 500px;
  }
`;
