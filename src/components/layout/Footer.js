import React from 'react';
import styled from 'styled-components';
import { orange } from '../../utilities';
import { HeadingH2, HeadingH4, Paragraph } from '../elements';
import { FaRegEnvelope, FaMobileAlt, FaRegMap } from 'react-icons/fa';

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className='company-info'>
        <HeadingH2>Whoosh</HeadingH2>
        <Paragraph modifiers='feature'>
          Whoosh to jedna z najbardziej popularnych platfrom do nauki języka
          angielskiego za pomocą fiszek. Naszą misję stanowi niesienie uczniom
          pomocy w ćwiczeniu i doskonaleniu języka angielskiego.
        </Paragraph>
      </div>
      <div className='contact'>
        <div className='contact-item'>
          <div className='icon'>
            <FaMobileAlt />
          </div>
          <div>
            <HeadingH4>+48 583 231 123</HeadingH4>
            <Paragraph modifiers='small'>Pon-Pt 09:00 - 16:00</Paragraph>
          </div>
        </div>
        <div className='contact-item'>
          <div className='icon'>
            <FaRegEnvelope />
          </div>
          <div>
            <HeadingH4>kontakt@whoosh.pl</HeadingH4>
            <Paragraph modifiers='small'>online support</Paragraph>
          </div>
        </div>
        <div className='contact-item'>
          <div className='icon'>
            <FaRegMap />
          </div>
          <div>
            <HeadingH4>Warszawa, Polska</HeadingH4>
            <Paragraph modifiers='small'>al. Jerozolimskie 2234</Paragraph>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default styled(Footer)`
  margin: 0 auto;
  max-width: 1200px;
  background-color: #fff;
  font-size: 2rem;
  padding: 20px 30px;
  text-align: center;
  border-top: 0.5px solid #ddd;

  .company-info {
    margin: 0 auto;
    max-width: 850px;
    padding: 50px 0;
  }

  .contact {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    justify-content: center;
  }

  .contact-item {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }

  .icon {
    font-size: 3rem;
    margin-top: -10px;
    margin-right: 20px;
    & > svg {
      fill: ${orange};
    }
  }
`;
