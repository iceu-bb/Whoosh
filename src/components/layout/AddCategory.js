import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextInputForm from '../elements/forms/TextInputForm';
import { addCategory } from '../../redux/category/actions';

const AddCategory = ({
  handleSubmit,
  error,
  invalid,
  pristine,
  submitting,
  reset,
  addCategory
}) => {
  return (
    <div style={{ padding: '0 100px' }}>
      Dodaj Kategorię
      <form
        onSubmit={handleSubmit(values => {
          addCategory(values);
          reset();
        })}
      >
        <Field
          name='name'
          component={TextInputForm}
          type='text'
          placeholder='nazwa kategori'
          label='nazwa kategori'
        />
        {error && <span>{error}</span>}
        <button type='submit' disabled={invalid || submitting || pristine}>
          Dodaj Kategorię
        </button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addCategory }
)(reduxForm({ form: 'registerNewCategory' })(AddCategory));
