import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategoriesList } from '../../redux/category/categoryActions';
import CategoriesContainer from './CategoriesContainer';
import { declinedWord } from '../../helpers';
import SEO from '../../SEO';

const SearchCategoryDashboard = ({ categories, fetchCategoriesList }) => {
  useEffect(() => {
    categories.length === 0 && fetchCategoriesList();
  }, []);

  const message = `Znaleziono ${categories.length} ${declinedWord(
    'zestaw',
    categories.length
  )}`;

  return (
    <section>
      <SEO title='Wyszukiwarka' />
      <CategoriesContainer
        categories={categories || []}
        failMessage='Nie znaleziono żadnego zestawu pasującego do wzorca. Wyszukaj ponownie'
        showTitle={message}
      />
    </section>
  );
};

const mapStateToProps = state => ({
  categories: state.category.filteredCategories
});

export default connect(
  mapStateToProps,
  { fetchCategoriesList }
)(SearchCategoryDashboard);
