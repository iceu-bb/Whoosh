import React from 'react';
import { connect } from 'react-redux';
import TestModal from '../../components/elements/TestModal';
import LoginModal from '../../components/modals/LoginModal';
import RegisterModal from '../../components/modals/RegisterModal';
import UnauthModal from '../../components/modals/UnauthModal';

const modalLookup = {
  TestModal,
  LoginModal,
  RegisterModal,
  UnauthModal
};

const ModalManager = ({ currentModal }) => {
  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
};

const mapStateToProps = state => ({
  currentModal: state.modals
});

export default connect(
  mapStateToProps,
  null
)(ModalManager);
