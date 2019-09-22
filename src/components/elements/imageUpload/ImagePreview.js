import React from 'react';
import styled from 'styled-components';
import { below } from '../../../utilities';

const RenderPreview = styled.div`
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;

const Image = styled.img`
  max-height: 300px;
  ${below.phone`
    max-width: 350px;
  `}
`;

const ImagePreview = ({ image: { name, preview } }) => (
  <RenderPreview>
    <Image src={preview} alt={name} />
  </RenderPreview>
);

export default ImagePreview;
