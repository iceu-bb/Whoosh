import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardContainer from './CardContainer';
import {
  subscribeCollectionChanges,
  fetchCategoriesList
} from '../../redux/category/actions';

const CardDashboard = ({
  listOfCards,
  fetchCategoriesList,
  subscribeCollectionChanges,
  isLoading,
  match,
  categories,
  userId
}) => {
  const categoryName = `${match.params.categoryId}`;

  useEffect(() => {
    categories.length === 0 && fetchCategoriesList();
    let unsubscribe = () => {};
    subscribeCollectionChanges(categoryName, func => {
      unsubscribe = func;
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return isLoading ? (
    <div>Loading data</div>
  ) : listOfCards.length === 0 ? (
    <div>Kategoria nie istnieje bądź jest pusta</div>
  ) : (
    <div>
      <CardContainer
        cards={listOfCards}
        categoryName={categoryName}
        categories={categories}
        userId={userId}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  listOfCards: state.category.currentCategoryItems,
  isLoading: state.async.loading,
  categories: state.category.categoriesList,
  userId: state.firebase.auth.uid
});

export default connect(
  mapStateToProps,
  { subscribeCollectionChanges, fetchCategoriesList }
)(CardDashboard);
