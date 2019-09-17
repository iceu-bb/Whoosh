import React from 'react';
import styled from 'styled-components';
import { Button, HeadingH1, Paragraph } from '../../elements';

const Hero = ({ className }) => {
  return (
    <div className={className}>
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
        <Button modifiers='white'>Dołącz do nas</Button>
      </div>
      <div>laptop image here </div>
    </div>
  );
};

export default styled(Hero)`
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  padding: 200px 0 50px;
`;
