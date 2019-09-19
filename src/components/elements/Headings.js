import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { orange } from '../../utilities';

const HEADING3_MODIFIERS = {
  big: () => `
  font-size: 3rem;
  margin-bottom: 100px;
  `,
  medium: () => `
  font-size: 1.8rem;
  margin-bottom: 10px;
  `
};

const HEADING2_MODIFIERS = {
  marginBig: () => `
  margin-bottom: 100px;
  `,
  orange: () => `
  color: ${orange};
  margin-bottom: 50px;
  `
};

export const HeadingH1 = styled.h1`
  font-size: 3.5rem;
  color: #fff;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 30px;
`;

export const HeadingH2 = styled.h2`
  font-size: 3rem;
  margin-bottom: 30px;
  letter-spacing: 1px;
  ${applyStyleModifiers(HEADING2_MODIFIERS)}
`;

export const HeadingH3 = styled.h3`
  color: ${orange};
  font-size: 1.5rem;
  margin-bottom: 10px;

  ${applyStyleModifiers(HEADING3_MODIFIERS)}
`;

export const HeadingH4 = styled.h4`
  font-size: 1.6rem;
  font-weight: bold;
`;
