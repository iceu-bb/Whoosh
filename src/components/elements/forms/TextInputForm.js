import React from 'react';

// props from redux-form HOC
const TextInputForm = ({ input, type, placeholder }) => {
  return <input {...input} placeholder={placeholder} type={type} />;
};

export default TextInputForm;
