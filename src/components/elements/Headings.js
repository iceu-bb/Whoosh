import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { orange } from '../../utilities';

const HEADING_MODIFIERS = {
  big: () => `
  font-size: 3rem;
  margin-bottom: 100px;
  `
};

export const HeadingH1 = styled.h1`
  font-size: 3.5rem;
  color: #fff;
  letter-spacing: 2px;
  margin-bottom: 30px;
`;

export const HeadingH2 = styled.h2`
  font-size: 3rem;
  margin-bottom: 30px;
`;

export const HeadingH3 = styled.h3`
  color: ${orange};
  font-size: 1rem;
  margin-bottom: 20px;

  ${applyStyleModifiers(HEADING_MODIFIERS)}
`;
