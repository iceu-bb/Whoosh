import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import ImagePreview from './ImagePreview';
import Placeholder from './Placeholder';
import ShowError from './ShowError';

const PreviewContainer = styled.div`
  margin: 0 auto;
  height: 300px;
  max-width: 400px;
  margin-top: 75px;
  margin-bottom: 75px;
  border ${({ isDragActive }) => (isDragActive ? '3px dashed black' : 'none')}
`;

const DropzoneInput = ({ setImage, type, image, meta: { touched, error } }) => {
  const onDrop = useCallback(
    acceptedFiles => {
      setImage(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    },
    [setImage]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*',
    maxSize: 3000000
  });

  return (
    <PreviewContainer isDragActive={isDragActive} {...getRootProps()}>
      <input type={type} {...getInputProps()} />
      {image && image.length > 0 ? (
        <ImagePreview image={image[0]} />
      ) : (
        <Placeholder error={error} touched={touched} />
      )}
      {touched && error && <ShowError error={error} />}
    </PreviewContainer>
  );
};
export default DropzoneInput;
