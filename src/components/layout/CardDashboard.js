import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardContainer from './CardContainer';
import { fetchCategory } from '../../redux/category/actions';

const CardDashboard = ({ listOfCards, fetchCategory, isLoading }) => {
  useEffect(() => {
    fetchCategory('fruits');
  }, []);

  return isLoading ? (
    <div>Loading data</div>
  ) : listOfCards.length === 0 ? (
    <div>Kategoria nie istnieje bądź jest pusta</div>
  ) : (
    <div>
      <CardContainer cards={listOfCards} />
    </div>
  );
};

const mapStateToProps = state => ({
  listOfCards: state.category,
  isLoading: state.async.loading
});

export default connect(
  mapStateToProps,
  { fetchCategory }
)(CardDashboard);
