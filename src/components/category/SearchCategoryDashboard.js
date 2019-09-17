import React from 'react';
import { connect } from 'react-redux';
import CategoriesContainer from './CategoriesContainer';
import { declinedWord } from '../../helpers';

const SearchCategoryDashboard = ({ categories }) => {
  const message = `Znaleziono (${categories.length}) ${declinedWord(
    'zestaw',
    categories.length
  )}`;

  return (
    <div>
      <CategoriesContainer
        categories={categories || []}
        failMessage='Nie znaleziono żadnego zestawu pasującego do wzorca. Wyszukaj ponownie'
        showTitle={message}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.category.filteredCategories
});

export default connect(
  mapStateToProps,
  {}
)(SearchCategoryDashboard);
