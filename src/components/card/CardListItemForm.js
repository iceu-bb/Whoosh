import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import TextInputForm from '../elements/forms/TextInputForm';
import { useOnClickOutside } from '../../helpers';
import { IconButton } from '../elements';
import { FaRegCheckCircle } from 'react-icons/fa';

const CardItemForm = ({
  className,
  english,
  polish,
  initialize,
  handleSubmit,
  handleSubmission,
  invalid,
  submitting,
  pristine,
  isEdited,
  setEdit,
  formRef
}) => {
  useEffect(() => {
    initialize({ english, polish });
  }, []);

  return (
    <>
      {isEdited && (
        <form
          ref={formRef}
          className={className}
          onSubmit={handleSubmit(handleSubmission)}
        >
          <div className='form-field'>
            <Field
              name='english'
              component={TextInputForm}
              ownClassName='flashcard-input'
            />
          </div>
          <div className='form-field'>
            <Field
              name='polish'
              component={TextInputForm}
              ownClassName='flashcard-input'
            />
          </div>
          {/* <IconButton
            className='confirm-button'
            type='submit'
            disabled={invalid || submitting || pristine}
          >
            <FaRegCheckCircle />
          </IconButton> */}
        </form>
      )}
    </>
  );
};

export default styled(reduxForm({ form: 'cardItemForm' })(CardItemForm))`
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  position: relative;

  .form-field {
    height: 100px;
    padding: 10px;
    position: relative;
    border-right: 1px solid #ddd;
    & > div {
      max-width: 90%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .confirm-button {
    background-color: green;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translete(-50%, -50%);
    border: none;
    font-size: 25px;
  }
`;
