import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import TextInputForm from '../elements/forms/TextInputForm';
import { addCategory } from '../../redux/category/actions';
import { HeadingH2, Button, Paragraph } from '../elements';
import Dropzone from '../elements/imageUpload/Dropzone';
import { withRouter } from 'react-router-dom';

const checkIfCategoryNameExist = (categories, name) => {
  const isExist = categories.filter(item => item.name === name);
  return isExist.length;
};

const isExistCategoryName = (value, ...props) => {
  const categories = props[1].categories;
  const isExist = checkIfCategoryNameExist(categories, value);
  return isExist ? 'wybrana nazwa juz istnieje' : undefined;
};

const required = value => (value ? undefined : 'Required');

const AddCategory = ({
  className,
  handleSubmit,
  error,
  invalid,
  pristine,
  submitting,
  reset,
  addCategory,
  history,
  categories
}) => {
  const [image, setImage] = useState([]);

  const handleCategorySubmit = async values => {
    await addCategory(values, image[0]);
    resetForm(values.name);
  };

  const resetForm = categoryName => {
    setImage([]);
    reset();
    history.push(`/category/${categoryName}`);
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
          validate={[isExistCategoryName, required]}
        />
        <Field
          name='image'
          component={Dropzone}
          type='file'
          image={image}
          setImage={setImage}
        />
        {error && <span>{error}</span>}
        <Button
          type='submit'
          disabled={invalid || image.length === 0 || submitting || pristine}
        >
          Dodaj Kategorię
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.category.categoriesList
});

export default styled(
  withRouter(
    connect(
      mapStateToProps,
      { addCategory }
    )(reduxForm({ form: 'registerNewCategory' })(AddCategory))
  )
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
