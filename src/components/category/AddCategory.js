import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import TextInputForm from '../elements/forms/TextInputForm';
import { addCategory, fetchCategoriesList } from '../../redux/category/actions';
import { HeadingH2, Button, Paragraph } from '../elements';
import Dropzone from '../elements/imageUpload/Dropzone';
import { withRouter } from 'react-router-dom';
import Resizer from 'react-image-file-resizer';
import { LoadingComponent } from '../elements';

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
  categories,
  fetchCategoriesList,
  isLoading
}) => {
  const [image, setImage] = useState([]);
  const [imageblob, setImageblob] = useState([]);

  const optimizeImage = () => {
    Resizer.imageFileResizer(
      image[0],
      250,
      400,
      'jpeg',
      100,
      0,
      uri => {
        setImageblob([uri]);
      },
      'blob'
    );
  };

  useEffect(() => {
    if (image[0] && image[0].size > 250000) optimizeImage();
    else setImageblob([image[0]]);
  }, [image]);

  const handleCategorySubmit = async values => {
    window.scrollTo(0, 0);
    await addCategory(values, imageblob[0]);
    resetForm(values.name);
  };

  const resetForm = categoryName => {
    setImage([]);
    reset();
    fetchCategoriesList();
    history.push(`/category/${categoryName}`);
  };

  if (isLoading) return <LoadingComponent />;

  return (
    <div className={className}>
      <HeadingH2 modifiers='orange'>Dodaj nowy Zestaw</HeadingH2>
      <Paragraph modifiers={['feature', 'marginBig', 'fontBig']}>
        Stworzenie zestawu jest banalnie proste. Wystarczy że wpiszesz nazwę i
        dodasz zdjęcie (max-size: 10MB).
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
  categories: state.category.categoriesList,
  isLoading: state.async.loading
});

export default styled(
  withRouter(
    connect(
      mapStateToProps,
      { addCategory, fetchCategoriesList }
    )(reduxForm({ form: 'registerNewCategory' })(AddCategory))
  )
)`
  padding: 100px 2%;
  margin: 0 auto;
  max-width: 600px;
  text-align: center;

  .form {
    margin: 70px auto 0;
    padding: 0 10px;
    max-width: 400px;
  }
`;
