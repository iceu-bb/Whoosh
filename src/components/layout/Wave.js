import React from 'react';
import styled from 'styled-components';

// https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections

const Wave = ({ className }) => {
  return (
    <div className={className}>
      <svg className='svg' viewBox='0 0 500 150' preserveAspectRatio='none'>
        <path
          class='path'
          d='M-39.79,29.90 C242.37,242.07 235.04,-90.50 504.79,87.13 L500.00,150.00 L0.00,150.00 Z'
        ></path>
      </svg>
    </div>
  );
};

export default styled(Wave)`
  height: 300px;
  overflow: hidden;

  .svg {
    height: 100%;
    width: 100%;
  }

  .path {
    stroke: none;
    fill: white;
  }
`;
