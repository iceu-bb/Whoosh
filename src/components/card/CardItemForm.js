import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import TextInputForm from '../elements/forms/TextInputForm';

const CardItemForm = ({
  className,
  english,
  polish,
  initialize,
  setEdit,
  handleSubmit,
  handleSubmission,
  invalid,
  submitting,
  pristine
}) => {
  useEffect(() => {
    initialize({ english, polish });
  }, []);

  return (
    <form className={className} onSubmit={handleSubmit(handleSubmission)}>
      <div className='form-field'>
        <Field
          name='english'
          component={TextInputForm}
          defaultValue={english}
        />
      </div>
      <div className='form-field'>
        <Field name='polish' component={TextInputForm} defaultValue={polish} />
      </div>
      <button type='submit' disabled={invalid || submitting || pristine}>
        Update card
      </button>
    </form>
  );
};

export default styled(reduxForm({ form: 'cardItemForm' })(CardItemForm))`
  background-color: orangered;
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;

  .form-field {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
