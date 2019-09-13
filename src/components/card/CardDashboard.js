import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardContainer from './CardContainer';
import { fetchCategoryItems } from '../../redux/category/actions';

const CardDashboard = ({
  listOfCards,
  fetchCategoryItems,
  isLoading,
  match
}) => {
  const categoryName = `${match.params.categoryId}`;
  useEffect(() => {
    fetchCategoryItems(categoryName);
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
  { fetchCategoryItems }
)(CardDashboard);
