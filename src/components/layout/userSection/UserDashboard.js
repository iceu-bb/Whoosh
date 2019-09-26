import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getUserCategories,
  fetchCategoriesList
} from '../../../redux/category/categoryActions';
import CategoriesContainer from '../../category/CategoriesContainer';
import SEO from '../../../SEO';

const UserDashboard = ({
  getUserCategories,
  userId,
  categories,
  userCategories,
  fetchCategoriesList
}) => {
  useEffect(() => {
    categories.length === 0 && fetchCategoriesList();
    getUserCategories(userId);
  }, [categories]);

  const message = `moje zestawy (${userCategories.length})`;

  return (
    <section>
      <SEO title='Moje Zestawy' />
      <CategoriesContainer
        categories={userCategories}
        failMessage='Nie znaleziono żadnych pasujących zestawów'
        showTitle={message}
        settings={true}
      />
    </section>
  );
};

const mapStateToProps = state => ({
  userId: state.firebase.auth.uid,
  categories: state.category.categoriesList,
  userCategories: state.category.userCategories
});

export default connect(
  mapStateToProps,
  { getUserCategories, fetchCategoriesList }
)(UserDashboard);
