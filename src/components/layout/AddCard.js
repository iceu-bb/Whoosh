import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextInputForm from '../elements/forms/TextInputForm';
import SelectInputForm from '../elements/forms/SelectInputForm';
import { addCard } from '../../redux/category/actions';
import {
  composeValidators,
  combineValidators,
  isRequired,
  createValidator,
  hasLengthGreaterThan,
  hasLengthBetween
} from 'revalidate';

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
  addCard
}) => {
  return (
    <div style={{ padding: 100 }}>
      Dodaj Fiszkę
      <form
        onSubmit={handleSubmit(values => {
          addCard(values);
          reset();
        })}
      >
        <Field
          name='category'
          component={SelectInputForm}
          options={categories}
          type='select'
          placeholder='wybierz kategorię'
          label='wybierz kategorię'
        />
        <Field
          name='english'
          component={TextInputForm}
          type='text'
          placeholder='angielska wersja'
          label='angielska wersja'
        />
        <Field
          name='polish'
          component={TextInputForm}
          type='text'
          placeholder='polska wersja'
          label='polska wersja'
        />
        {error && <span>{error}</span>}
        <button type='submit' disabled={invalid || submitting || pristine}>
          Dodaj Fiszkę
        </button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addCard }
)(reduxForm({ form: 'registerNewCard', validate })(AddCard));
