import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { closeModal } from '../../redux/modal/modalActionts';
import { deleteCategory, removeCard } from '../../redux/category/actions';
import { FaTimes } from 'react-icons/fa';
import {
  ModalWrapper,
  ModalInner,
  Header,
  CloseButton,
  Paragraph,
  Button
} from '../elements/index';
import { withRouter } from 'react-router';

const ConfirmationModal = ({
  className,
  closeModal,
  categoryName,
  deleteCategory,
  cardId,
  removeCard
}) => {
  return (
    <div className={className}>
      <ModalWrapper>
        <ModalInner>
          <Header>
            <span>Potwierdzenie usunięcia</span>
            <CloseButton
              onClick={() => {
                closeModal();
              }}
            >
              <FaTimes />
            </CloseButton>
          </Header>
          <div className='content'>
            <Paragraph modifiers='feature'>
              Czy na pewno chcesz usunąć{' '}
              {cardId ? (
                'tą fiszkę ?'
              ) : (
                <>
                  zestaw
                  <span className='bold'> {categoryName} ?</span>
                </>
              )}
            </Paragraph>
            <div className='buttons-container'>
              <Button
                modifiers='white'
                onClick={async () => {
                  cardId
                    ? removeCard(categoryName, cardId)
                    : await deleteCategory(categoryName);
                  closeModal();
                }}
              >
                Tak
              </Button>
              <Button
                onClick={() => {
                  closeModal();
                }}
              >
                Nie
              </Button>
            </div>
          </div>
        </ModalInner>
      </ModalWrapper>
    </div>
  );
};

export default styled(
  withRouter(
    connect(
      null,
      { deleteCategory, closeModal, removeCard }
    )(ConfirmationModal)
  )
)`
  .content {
    margin: 0 auto;
    width: 90%;
    padding: 15px 0;
    text-align: center;
  }

  .buttons-container {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
  }

  .bold {
    font-weight: bold;
  }
`;
