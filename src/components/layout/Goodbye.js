import React from 'react';
import styled from 'styled-components';
import { HeadingH2, HeadingH3, Button } from '../elements';
import { Link } from 'react-router-dom';
import SEO from '../../SEO';

const Goodbye = ({ className }) => {
  return (
    <section className={className}>
      <SEO title='Do zobaczenia' />
      <div className='container'>
        <HeadingH3 modifiers='medium'>ZOSTAŁEŚ POPRAWNIE WYLOGOWANY</HeadingH3>
        <HeadingH2 modifiers='marginBig'>
          Pobierz aplikację, aby wygodnie uczyć się w podróży
        </HeadingH2>
        <Button to='/' as={Link}>
          Strona główna
        </Button>
      </div>
    </section>
  );
};

export default styled(Goodbye)`
  margin-top: -30px;
  padding: 100px 0;
  background-color: #fff;

  .container {
    margin: 0 auto;
    max-width: 800px;
    text-align: center;
  }
`;
