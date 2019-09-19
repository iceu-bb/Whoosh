import styled from 'styled-components';
import { orange, boxShadow1 } from '../../utilities';

export const Card1 = styled.div`
  width: 350px;
  height: 250px;
  background-color: #fff;
  font-size: 1.6rem;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  transition: all 0.2s ease;
  ${boxShadow1};

  &:hover {
    outline: 4px solid orange;
  }

  .container {
    display: flex;
    height: 25%;
    justify-content: space-evenly;
    align-items: center;
  }

  .name {
    font-weight: bold;
  }

  .author {
    color: ${orange};
  }
`;
