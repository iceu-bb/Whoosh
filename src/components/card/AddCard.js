import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import TextInputForm from '../elements/forms/TextInputForm';
// import SelectInputForm from '../elements/forms/SelectInputForm';
import { addCard } from '../../redux/category/actions';
import { combineValidators, isRequired } from 'revalidate';
import { HeadingH3, Button } from '../elements';

const validate = combineValidators({
  category: isRequired({ message: 'Wyboerz kategorię' }),
  english: isRequired({ message: 'To pole jest wymagane' }),
  polish: isRequired({ message: 'To pole jest wymagane' })
});

const categories = [
  { key: 'fruits', text: 'owoce', value: 'fruits' },
  { key: 'vegetables', text: 'warzywa', value: 'vegetables' }
];

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
    <div className={className} style={{ padding: 100 }}>
      <HeadingH3 modifiers='medium'>Dodaj fiszkę do zestawu</HeadingH3>
      <form
        className='form'
        onSubmit={handleSubmit(values => {
          addCard(values, categoryName);
          reset();
        })}
      >
        {/* <Field
          name='category'
          component={SelectInputForm}
          options={categories}
          type='select'
          placeholder='wybierz kategorię'
          label='wybierz kategorię'
        /> */}
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
  .form {
    margin: 0 auto;
    max-width: 500px;
  }
`;
