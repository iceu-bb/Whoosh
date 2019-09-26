import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
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

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false
  };

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorContainer>
          <ErrorImage
            src='https://i.imgur.com/qIufhof.png'
            alt='broken page image'
          />
          <ErrorText>Caution! This Page is Cordoned Off</ErrorText>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
