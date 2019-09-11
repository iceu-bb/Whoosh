import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { closeModal } from '../../redux/modal/modalActionts';

const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalInner = styled.div`
  width: 300px;
  height: 250px;
  background-color: #fff;
`;

const TestModal = ({ closeModal }) => {
  return (
    <ModalWrapper>
      <ModalInner>
        <button onClick={() => closeModal()}>Zamknij Modal</button>
      </ModalInner>
    </ModalWrapper>
  );
};

export default connect(
  null,
  { closeModal }
)(TestModal);
