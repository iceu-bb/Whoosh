import React from 'react';
import styled from 'styled-components';
import Wave from './Wave';
import { gradientMain, below } from '../../../utilities';

const WaveContainer = ({ className }) => {
  return (
    <div className={className}>
      <Wave trend='up' />
    </div>
  );
};

export default styled(WaveContainer)`
  padding-top: 50px;
  ${gradientMain};
  margin-bottom: -50px;
  ${below.small`
    margin-bottom: -40px;
  `}
`;
