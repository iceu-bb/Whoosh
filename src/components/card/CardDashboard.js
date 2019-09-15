import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardContainer from './CardContainer';
import { subscribeCollectionChanges } from '../../redux/category/actions';

const CardDashboard = ({
  listOfCards,
  subscribeCollectionChanges,
  isLoading,
  match
}) => {
  const categoryName = `${match.params.categoryId}`;

  useEffect(() => {
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
      <CardContainer cards={listOfCards} categoryName={categoryName} />
    </div>
  );
};

const mapStateToProps = state => ({
  listOfCards: state.category.currentCategoryItems,
  isLoading: state.async.loading
});

export default connect(
  mapStateToProps,
  { subscribeCollectionChanges }
)(CardDashboard);
