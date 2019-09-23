import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CategoriesContainer from './CategoriesContainer';
import { fetchCategoriesList } from '../../redux/category/actions';
import { declinedWord } from '../../helpers';

const CategoriesDashboard = ({ fetchCategoriesList, categories, loading }) => {
  useEffect(() => {
    fetchCategoriesList();
  }, []);

  const message = ` ${categories.length} ${declinedWord(
    'zestaw',
    categories.length
  )} do nauki, a ich liczba ciągle rośnie`;
  return (
    <div>
      <CategoriesContainer
        categories={categories}
        failMessage='loading data'
        showTitle={message}
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
