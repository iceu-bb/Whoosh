import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategoriesList } from '../../redux/category/categoryActions';
import { declinedWord } from '../../helpers';
import CategoriesContainer from './CategoriesContainer';

const CategoriesDashboard = ({ fetchCategoriesList, categories, loading }) => {
  useEffect(() => {
    categories.length === 0 && fetchCategoriesList();
  }, []);

  const message = ` ${categories.length} ${declinedWord(
    'zestaw',
    categories.length
  )} do nauki, a ich liczba ciągle rośnie`;
  return (
    <section>
      <CategoriesContainer
        categories={categories.slice(0, 12)}
        failMessage='loading data'
        showTitle={message}
      />
    </section>
  );
};

const mapStateToProps = state => ({
  categories: state.category.categoriesList
});

export default connect(
  mapStateToProps,
  { fetchCategoriesList }
)(CategoriesDashboard);
