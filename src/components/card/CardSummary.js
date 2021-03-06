import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { orangeMain, yellowMain, below } from '../../utilities';
import { HeadingH2, Button } from '../elements';

const CardSummary = ({ className }) => {
  return (
    <section className={className}>
      <div className='container'>
        <HeadingH2>Obracaj fiszki i ucz się!</HeadingH2>
        <p className='hide-small text'>
          Fiszki możesz przesuwać również za pomocą strzałek klawiatury, a
          obracać naciskająć klawisz Control.
        </p>
        <p className='text'>
          Pod spodem możesz dodać słówko do tej kategorii badż edytować i usunąć
          te fiszki które dodałeś wcześniej.
        </p>
        <Button modifiers='white' as={Link} to='/add'>
          Nowy zestaw
        </Button>
      </div>
    </section>
  );
};

export default styled(CardSummary)`
  width: 100vw;
  background-image: linear-gradient(to right, ${yellowMain}, ${orangeMain});
  padding: 200px 2% 130px;
  font-size: 2rem;
  color: #fff;

  ${below.medium`
      padding: 150px 2% 130px;
  `}
  ${below.smallMed`
      padding: 130px 2% 110px;
  `}
   ${below.small`
      padding: 110px 2% 90px;
  `}
   ${below.small`
      padding: 100px 2% 80px;
  `}

  .container {
    max-width: 500px;
    margin: 30px auto 0;
  }

  .text{
    margin-bottom: 30px;
  }

  .hide-small{
    ${below.small`
      display: none;
  `}
  }
`;
