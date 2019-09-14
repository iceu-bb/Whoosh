import React from 'react';

// props from redux-form HOC
const TextInputForm = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) => {
  return (
    <>
      {label && <label>{label}</label>}
      <div>
        <input {...input} placeholder={placeholder} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </>
  );
};

export default TextInputForm;
