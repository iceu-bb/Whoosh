import React from 'react';
import styled from 'styled-components';
import { below } from '../../../utilities';

// https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections

const Wave = ({ className, trend }) => {
  return (
    <div className={className}>
      <svg className='svg' viewBox='0 0 500 150' preserveAspectRatio='none'>
        {trend === 'up' ? (
          <path
            class='path'
            d='M-59.79,29.90 C242.37,242.07 235.04,-90.50 504.79,87.13 L500.00,150.00 L0.00,150.00 Z'
          ></path>
        ) : (
          <path
            class='path'
            d='M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z'
          ></path>
        )}
      </svg>
    </div>
  );
};

export default styled(Wave)`
  height: 300px;
  overflow: hidden;
  margin-bottom: ${props => props.trend === 'down' && ' -300px'};

  ${below.large`
    height: 250px;
    margin-bottom: ${props => props.trend === 'down' && ' -250px'};
  `};
  ${below.medium`
    height: 200px;
    margin-bottom: ${props => props.trend === 'down' && ' -200px'};
    `};
  ${below.small`
    height: 175px;
    margin-bottom: ${props => props.trend === 'down' && ' -175px'};
    `};
  ${below.phone`
    height: 160px;
    margin-bottom: ${props => props.trend === 'down' && ' -160px'};
    `};

  .svg {
    height: 101%;
    width: 100vw;
  }

  .path {
    stroke: none;
    fill: #fff;
  }
`;
