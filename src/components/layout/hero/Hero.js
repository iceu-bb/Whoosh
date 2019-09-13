import React from 'react';
import styled from 'styled-components';
import { Button, HeadingH1, Paragraph } from '../../elements';

const Hero = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <HeadingH1>Get a Trustworthy Technology Partner</HeadingH1>
        <Paragraph>
          We are a web development agency that strategizes, designs and develops
          custom websites and web applications for businesses around the world.
          We approach projects as proactive business consultants, constantly
          providing feedback and focus to drive success.
        </Paragraph>

        <Button>Dołącz do nas</Button>
      </div>
      <div>laptop image here </div>
    </div>
  );
};

export default styled(Hero)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 100px;
  padding: 250px 0 50px;
`;
