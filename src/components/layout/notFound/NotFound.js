import React from 'react';
import styled from 'styled-components';
import { Button } from '../../elements';

const ErrorContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ErrorImage = styled.img`
  width: 40vh;
  height: 40vh;
`;

const ErrorText = styled.p`
  font-size: 3rem;
`;

const ErrorButton = styled(Button)`
  margin: 50px;
`;

const NotFound = ({ history }) => {
  return (
    <ErrorContainer>
      <ErrorImage
        src='https://i.imgur.com/qIufhof.png'
        alt='broken page image'
      />
      <ErrorText>Strona o podanym adresie nie istnieje</ErrorText>
      <ErrorButton
        onClick={() => {
          history.push('/');
        }}
      >
        Przejdź do strony głównej
      </ErrorButton>
    </ErrorContainer>
  );
};

export default NotFound;
