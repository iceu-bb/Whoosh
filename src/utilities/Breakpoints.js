import { css } from 'styled-components';

const size = {
  ultraSmallPhone: 356,
  phone: 450,
  small: 600,
  smallMed: 860,
  medium: 1000,
  large: 1200
};

export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
