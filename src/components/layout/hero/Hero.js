import React, { memo } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, HeadingH1, Paragraph } from '../../elements';
import Wave from '../wave/Wave';
import { openModal } from '../../../redux/modal/modalActionts';
import { gradientMain, below } from '../../../utilities';

const Hero = memo(({ className, openModal, auth }) => {
  const isAuthenticated = auth.isLoaded && !auth.isEmpty;
  return (
    <div className={className}>
      <div className='container'>
        <div>
          <HeadingH1>
            Ponad 80% uczniów korzystających z Whoosh potwierdza, że otrzymuje
            lepsze oceny
          </HeadingH1>
          <Paragraph>
            Whoosh oferuje narzędzia dla uczniów, które umożliwiają im tworzenie
            fiszek, praktyczne ćwiczenie słownictwa, dodawanie własnych zestawów
            słowek.
          </Paragraph>
          <Paragraph modifiers='marginBig'>
            Zobacz w jaki sposób proste narzędzia Whoosh mogą pomóc Ci w nauce
            angielskiego.
          </Paragraph>
          {isAuthenticated ? (
            <Button modifiers='white' to='/user/faq' as={Link}>
              Czytaj więcej
            </Button>
          ) : (
            <Button
              modifiers='white'
              onClick={() => openModal('RegisterModal', null)}
            >
              Dołącz do nas
            </Button>
          )}
        </div>
        <div className='laptop-container'>laptop image here</div>
      </div>
      <Wave trend='up' />
    </div>
  );
});

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default styled(
  connect(
    mapStateToProps,
    { openModal }
  )(Hero)
)`
  padding: 200px 0 0;
  ${gradientMain};
  ${below.smallMed`
    padding: 150px 0 0;
  `};

  .container {
    margin: 0 auto;
    padding: 0 30px;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;

    ${below.smallMed`
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 50px;
    text-align: center;
    padding: 0 10px;
    `};
  }

  .laptop-container {
    width: 100%;
    height: 400px;
    background-color: teal;
  }
`;
