import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const PARAGRAPH_MODIFIERS = {
  marginBig: () => `
  margin-bottom: 40px;
  `,
  feature: () => `
  color: #000;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.5;
  `,
  small: () => `
  color: #000;
  font-size: 1.4rem;
  letter-spacing: 0.6px;
  `
};

export const Paragraph = styled.h1`
  font-size: 1.7rem;
  font-weight: 300;
  color: #fff;
  line-height: 1.3;
  letter-spacing: 1.5px;
  margin-bottom: 15px;

  ${applyStyleModifiers(PARAGRAPH_MODIFIERS)}
`;
