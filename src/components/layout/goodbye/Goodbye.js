import React from 'react';
import styled from 'styled-components';
import { HeadingH2, HeadingH3, Button } from '../../elements';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Goodbye = ({ className }) => {
  return (
    <section className={className}>
      <div className='container'>
        <HeadingH3 modifiers='medium'>ZOSTAŁEŚ POPRAWNIE WYLOGOWANY.</HeadingH3>
        <HeadingH2>Pobierz aplikację, aby uczyć się w podróży</HeadingH2>
        <div className='info'>
          <div className='info-box'>
            <HeadingH3>Ucz się w podróży</HeadingH3>
            <p>
              Narzędzia do nauki i gry przeznaczone specjalnie na urządzenia
              mobilne
            </p>
          </div>
          <div className='info-box'>
            <HeadingH3>Bezproblemowa synchronizacja</HeadingH3>
            <p>
              Wszystkie Twoje mobilne dane, których się uczysz, zostaną
              zsynchronizowane z danymi na stronie internetowej i odwrotnie
            </p>
          </div>
          <div className='info-box'>
            <HeadingH3>Ucz się offline</HeadingH3>
            <p>
              W samochodzie, autobusie, pociągu, a nawet w samolocie – możesz
              uczyć się naprawdę wszędzie
            </p>
          </div>
        </div>
        <Button to='/' as={Link}>
          Strona główna
        </Button>
      </div>
    </section>
  );
};

export default styled(withRouter(Goodbye))`
  margin-top: -80px;
  padding: 100px 0;
  background-color: #fff;

  .container {
    margin: 0 auto;
    max-width: 800px;
    text-align: center;
  }

  .info {
    margin: 0 auto;
    padding: 50px 100px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
  }

  .info-box {
    border: 1px solid #000;
    margin-bottom: 40px;
  }
`;
