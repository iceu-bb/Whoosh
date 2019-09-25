import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import TextInputForm from '../elements/forms/TextInputForm';
import { addCard } from '../../redux/card/cardActions';
import { HeadingH3, Button } from '../elements';
import { addCardValidator } from '../../helpers';

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
          ownClassName='classic-input'
        />
        <Field
          name='polish'
          component={TextInputForm}
          type='text'
          placeholder='polska wersja'
          label='polska wersja'
          ownClassName='classic-input'
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
  )(reduxForm({ form: 'registerNewCard', validate: addCardValidator })(AddCard))
)`
  padding: 0 7% 50px;

  .form {
    margin: 20px auto;
    max-width: 500px;
  }
`;
