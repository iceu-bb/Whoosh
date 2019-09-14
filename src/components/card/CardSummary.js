import React from 'react';
import styled from 'styled-components';
import { HeadingH2, Button } from '../elements';

const CardSummary = ({ className, categoryName }) => {
  return (
    <section className={className}>
      <div className='container'>
        <HeadingH2>Obracaj fiszki i ucz się!</HeadingH2>
        <p> Zestaw {categoryName} istnieje od ... dni.</p>
        <p style={{ marginBottom: 30 }}>
          Pod spodem możesz dodać słówko do tej kategorii badż edytować i usunąć
          te fiszki które dodałeś wcześniej.
        </p>
        <Button modifiers='white'>Nowy zestaw</Button>
      </div>
    </section>
  );
};

export default styled(CardSummary)`
  width: 100vw;
  background-image: linear-gradient(to right, #f1bc2e, #fc7751);
  padding: 200px 0 130px;
  font-size: 2rem;
  color: #fff;

  .container {
    max-width: 500px;
    margin: 30px auto 0;
  }
`;
