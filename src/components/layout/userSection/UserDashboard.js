import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getUserCategories,
  fetchCategoriesList
} from '../../../redux/category/actions';
import CategoriesContainer from '../../category/CategoriesContainer';

const UserDashboard = ({
  getUserCategories,
  userId,
  categories,
  fetchCategoriesList
}) => {
  useEffect(() => {
    categories.length === 0 && fetchCategoriesList();
    getUserCategories(userId);
  }, []);

  const message = `moje zestawy (${categories.length})`;

  return (
    <div>
      <CategoriesContainer
        categories={categories}
        failMessage='Nie znaleziono żadnych pasujących zestawów'
        showTitle={message}
        settings={true}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  userId: state.firebase.auth.uid,
  categories: state.category.userCategories
});

export default connect(
  mapStateToProps,
  { getUserCategories, fetchCategoriesList }
)(UserDashboard);
