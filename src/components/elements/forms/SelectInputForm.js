import React from 'react';

const SelectInputForm = ({
  input,
  placeholder,
  type,
  options,
  label,
  meta: { touched, error }
}) => {
  return (
    <>
      <label>{label}</label>
      <div>
        <select {...input} placeholder={placeholder} type={type}>
          {options.map(el => (
            <option key={el.key} value={el.value}>
              {el.text}
            </option>
          ))}
        </select>
        {touched && error && <span>{error}</span>}
      </div>
    </>
  );
};

export default SelectInputForm;
