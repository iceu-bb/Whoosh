import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardContainer from './CardContainer';
import {
  subscribeCollectionChanges,
  fetchCategoriesList,
  cleanCurrentCategoryItems
} from '../../redux/category/categoryActions';
import { LoadingComponent } from '../elements';
import SEO from '../../SEO';

const CardDashboard = ({
  listOfCards,
  fetchCategoriesList,
  subscribeCollectionChanges,
  isLoading,
  match,
  categories,
  userId,
  cleanCurrentCategoryItems
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
    setIsExist(isCategoryExist);

    return () => {
      unsubscribe();
      cleanCurrentCategoryItems();
    };
  }, [categories]);

  return isLoading ? (
    <LoadingComponent />
  ) : !isExist ? (
    <section style={{ margin: 100, textAlign: 'center', fontSize: '3rem' }}>
      {`Kategoria ${categoryName} nie istnieje`}
  </section>
  ) : (
    <section>
      <SEO title={`${categoryName}`} />
      <CardContainer
        cards={listOfCards}
        categoryName={categoryName}
        categories={categories}
        userId={userId}
        isLoading={isLoading}
      />
    </section>
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
  { subscribeCollectionChanges, fetchCategoriesList, cleanCurrentCategoryItems }
)(CardDashboard);
