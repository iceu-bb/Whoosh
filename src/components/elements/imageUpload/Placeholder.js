import React from 'react';
import styled from 'styled-components';
import { MdCloudUpload } from 'react-icons/md';
import { Paragraph } from '../Paragraphs';

const PlaceholderPreview = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
  border-radius: 5px;

  border: ${({ error, touched }) =>
    error && touched ? '1px dotted red' : 'none'};
`;

const Icon = styled.div`
  display: inline-block;
  font-size: 5rem;
  padding-top: 50px;
  margin-top: -70px;
`;

const Placeholder = ({ error, touched }) => (
  <PlaceholderPreview>
    <Icon>
      <MdCloudUpload />
    </Icon>
    <Paragraph modifiers='feature'>
      Kliknij albo upuść zdjęcie aby załadować obrazek.
    </Paragraph>
  </PlaceholderPreview>
);

export default Placeholder;
