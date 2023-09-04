import React from 'react';
import { css } from '@emotion/react';
import { RotateLoader } from 'react-spinners';
import "./LoadingSpinner.css";

const override = css`
  display: block;
  margin: 0 auto;
`;

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <RotateLoader color="#36D7B7" loading css={override} size={50} />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
