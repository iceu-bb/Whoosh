import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../redux/modal/modalActionts';

const Test = ({ openModal, fetchCategoryItems, match }) => {
  // props.match.params.categoryId
  return (
    <div>
      Testowy Component
      <button onClick={() => openModal('TestModal', null)}>Otwórz Modal</button>
    </div>
  );
};

export default connect(
  null,
  { openModal }
)(Test);
