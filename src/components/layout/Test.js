import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../redux/modal/modalActionts';
import { fetchCategoryItems } from '../../redux/category/actions';

const Test = ({ openModal, fetchCategoryItems, match }) => {
  // props.match.params.categoryId
  return (
    <div>
      Testowy Component
      <button onClick={() => openModal('TestModal', null)}>Otwórz Modal</button>
      <button onClick={() => fetchCategoryItems(`${match.params.categoryId}`)}>
        pobierz info
      </button>
    </div>
  );
};

export default connect(
  null,
  { openModal, fetchCategoryItems }
)(Test);
