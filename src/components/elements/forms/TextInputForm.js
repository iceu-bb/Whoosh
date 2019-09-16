import React from 'react';
import styled from 'styled-components';

// props from redux-form HOC
const TextInputForm = ({
  className,
  ownClassName,
  input,
  label,
  placeholder,
  type,
  autoFocus,
  meta: { touched, error }
}) => {
  return (
    <div className={className}>
      {touched && error && <span className='error'>{error}</span>}
      <input
        className={ownClassName}
        {...input}
        placeholder={placeholder}
        type={type}
        autoFocus={autoFocus}
      />
      {label && <label className='label'>{label}</label>}
    </div>
  );
};

export default styled(TextInputForm)`
  width: 100%;
  margin-bottom: 30px;

  > * {
    padding-left: 5px;
  }

  .error {
    color: red;
    font-size: 1.3rem;
  }

  .login-input {
    width: 100%;
    height: 45px;
    font-size: 1.7rem;
    background: #fff;
    border: 1px solid #ddd;
    padding-right: 15px;
    margin-bottom: 5px;
  }

  .login-input::placeholder {
    color: #ccc;
  }

  .label {
    font-size: 1.2rem;
    color: #aaa;
    text-transform: uppercase;
  }

  .flashcard-input {
    width: 100%;
    height: 35px;
    font-size: 1.4rem;
    background: #fff;
    border: 1px solid #ddd;
    padding-right: 15px;
    margin-bottom: 5px;
  }
`;
