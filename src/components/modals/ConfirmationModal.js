import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { closeModal } from '../../redux/modal/modalActionts';
import { deleteCategory } from '../../redux/category/categoryActions';
import { removeCard } from '../../redux/card/cardActions';
import { FaTimes } from 'react-icons/fa';
import { useEscapeToCloseModal } from '../../helpers';
import {
  ModalWrapper,
  ModalInner,
  Header,
  CloseButton,
  Paragraph,
  Button
} from '../elements/index';
import { withRouter } from 'react-router';
import { LoadingButton } from '../elements';

const ConfirmationModal = ({
  className,
  closeModal,
  categoryName,
  deleteCategory,
  cardId,
  removeCard,
  isLoading
}) => {
  useEscapeToCloseModal(closeModal);
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
                {isLoading && <LoadingButton />}
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

const mapStateToProps = state => ({
  isLoading: state.async.loading
});

export default styled(
  withRouter(
    connect(
      mapStateToProps,
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
