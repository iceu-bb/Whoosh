import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import TextInputForm from '../elements/forms/TextInputForm';
import { below } from '../../utilities';

const CardItemForm = ({
  className,
  english,
  polish,
  initialize,
  handleSubmission,
  isEdited,
  formRef
}) => {
  useEffect(() => {
    initialize({ english, polish });
    return () => {
      handleSubmission({
        english: formRef.current.elements[0].value,
        polish: formRef.current.elements[1].value
      });
    };
  }, []);

  return (
    <>
      {isEdited && (
        <form ref={formRef} className={className}>
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
        </form>
      )}
    </>
  );
};

export default styled(reduxForm({ form: 'cardItemForm' })(CardItemForm))`
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;

  ${below.small`
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;

      & > div:first-child {
        border-bottom: 1px solid #ccc;
      }
    `}

  .form-field {
    min-height: 60px;
    height: auto;
    padding: 10px;
    position: relative;
    border-right: 1px solid #ddd;
    & > div {
      max-width: 90%;
      ${below.small`
        max-width: 75%;
      `}
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
