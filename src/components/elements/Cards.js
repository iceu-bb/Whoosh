import styled from 'styled-components';
import { orange, boxShadow2, below } from '../../utilities';

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
  ${below.phone`
    max-width: 96vw;
    max-height: 250px;
    `}

  &:hover {
    outline: 4px solid ${orange};
    ${below.small`
    outline: none;
    `}
  }

  .container {
    display: flex;
    min-height: 25%;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
  }

  .name {
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .author {
    color: ${orange};
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0 7px;
  }

  .hidden {
    visibility: hidden;
    padding-left: 20px;
  }
`;
