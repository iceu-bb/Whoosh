import React from 'react';
import styled from 'styled-components';
import { Button, HeadingH2, HeadingH3, Paragraph } from '../../elements';

const Section1 = ({ className }) => {
  return (
    <div className={className}>
      <HeadingH3>Our offer</HeadingH3>
      <HeadingH2>Full-service web development company</HeadingH2>
      <Paragraph style={{ color: 'black', maxWidth: 600 }}>
        Our vast expertise in web development fuels successful delivery of
        websites and applications for our clients. We are agile and understand
        that time to market is crucial in today’s environment. Here’s what we
        can help you with.
      </Paragraph>
      <div style={{ height: 300 }}>Sekcja z featurami</div>
      <Button>Read More</Button>
    </div>
  );
};

export default styled(Section1)`
  padding: 50px 0;
  background-color: #fff;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
