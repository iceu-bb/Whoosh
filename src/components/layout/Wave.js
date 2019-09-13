import React from 'react';

const Wave = () => {
  return (
    <div style={{ height: '150px', overflow: 'hidden' }}>
      <svg
        viewBox='0 0 500 150'
        preserveAspectRatio='none'
        style={{ height: '100%', width: '100%' }}
      >
        <path
          d='M0.00,49.98 C170.71,272.65 271.49,-50.00 503.67,85.15 L500.00,0.00 L0.00,0.00 Z'
          style={{ stroke: 'none', fill: '#08f' }}
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
