import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CategoriesContainer from './CategoriesContainer';
import { fetchCategoriesList } from '../../redux/category/actions';

const CategoriesDashboard = ({ fetchCategoriesList, categories }) => {
  useEffect(() => {
    fetchCategoriesList();
  }, []);
  return (
    <div>
      <CategoriesContainer
        categories={categories}
        failMessage='loading data'
        showTitle={true}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.category.categoriesList
});

export default connect(
  mapStateToProps,
  { fetchCategoriesList }
)(CategoriesDashboard);
