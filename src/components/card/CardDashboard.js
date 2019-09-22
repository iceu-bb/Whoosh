import React, { useState, useEffect } from 'react';
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
  const [isExist, setIsExist] = useState(false);
  useEffect(() => {
    // subscribe to data
    categories.length === 0 && fetchCategoriesList();
    let unsubscribe = () => {};
    subscribeCollectionChanges(categoryName, func => {
      unsubscribe = func;
    });

    // check if category exist
    const isCategoryExist = categories.find(
      category => category.name === categoryName
    );
    console.log(isCategoryExist);
    setIsExist(isCategoryExist);

    return () => {
      unsubscribe();
    };
  }, [categories]);

  return isLoading ? (
    <div>Loading data</div>
  ) : !isExist ? (
    <div style={{ margin: 100, textAlign: 'center', fontSize: '3rem' }}>
      KATEGORIA NIE ISTNIEJE
    </div>
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
