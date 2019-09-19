import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, HeadingH1, Paragraph } from '../../elements';
import Wave from '../wave/Wave';
import { openModal } from '../../../redux/modal/modalActionts';
import { gradientMain } from '../../../utilities';

const Hero = ({ className, openModal, auth }) => {
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
        <div>laptop image here </div>
      </div>
      <Wave trend='up' />
    </div>
  );
};

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
  .container {
    margin: 0 auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
  }
`;
