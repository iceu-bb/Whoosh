import styled from 'styled-components';
import { orange, boxShadow2 } from '../../utilities';

export const Card1 = styled.div`
  width: 350px;
  height: 250px;
  background-color: #fff;
  font-size: 1.6rem;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  transition: all 0.2s ease;
  ${boxShadow2};

  &:hover {
    outline: 4px solid ${orange};
  }

  .container {
    display: flex;
    height: 25%;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
  }

  .name {
    font-weight: bold;
  }

  .author {
    color: ${orange};
  }

  .hidden {
    visibility: hidden;
  }
`;
