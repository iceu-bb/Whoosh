import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import TextInputForm from '../elements/forms/TextInputForm';
import { addCategory } from '../../redux/category/actions';
import { combineValidators, isRequired } from 'revalidate';
import { HeadingH2, Button, Paragraph } from '../elements';
import Dropzone from '../elements/imageUpload/Dropzone';

const validate = combineValidators({
  name: isRequired({ message: 'Podaj nazwę dla nowego zestawu' }),
  image: isRequired({ message: 'Dodaj zdjecię aby utworzyć zestaw' })
});

const AddCategory = ({
  className,
  handleSubmit,
  error,
  invalid,
  pristine,
  submitting,
  reset,
  addCategory
}) => {
  const [image, setImage] = useState([]);

  const handleCategorySubmit = values => {
    addCategory(values, image[0]);
    resetForm();
  };

  const resetForm = () => {
    setImage([]);
    reset();
  };

  return (
    <div className={className}>
      <HeadingH2 modifiers='orange'>Dodaj nowy Zestaw</HeadingH2>
      <Paragraph modifiers={['feature', 'marginBig', 'fontBig']}>
        Stworzenie zestawu jest banalnie proste. Wystarczy że wpiszesz nazwę i
        dodasz zdjęcie (max-size: 3MB).
      </Paragraph>
      <form className='form' onSubmit={handleSubmit(handleCategorySubmit)}>
        <Field
          name='name'
          component={TextInputForm}
          type='text'
          placeholder='Nazwa zestawu'
          label='nazwa zestawu'
          ownClassName='login-input'
        />
        <Field
          name='image'
          component={Dropzone}
          type='file'
          image={image}
          setImage={setImage}
        />
        {error && <span>{error}</span>}
        <Button type='submit' disabled={submitting || pristine}>
          Dodaj Kategorię
        </Button>
      </form>
    </div>
  );
};

export default styled(
  connect(
    null,
    { addCategory }
  )(reduxForm({ form: 'registerNewCategory', validate })(AddCategory))
)`
  padding: 100px 0;
  margin: 0 auto;
  max-width: 600px;
  text-align: center;

  .form {
    margin: 70px auto 0;
    max-width: 400px;
  }
`;
