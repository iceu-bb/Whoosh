import React from 'react';
import { connect } from 'react-redux';
import CategoriesContainer from './CategoriesContainer';

const SearchCategoryDashboard = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      <CategoriesContainer categories={categories || []} failMessage="Nie znaleziono żadnego zestawu pasującego do wzorca. Wyszukaj ponownie" showTitle={false}
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
