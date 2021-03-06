import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Info: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    <svg
      width={width || size}
      height={height || size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1" fill="white">
        <path d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" />
        <path d="M15 10C15 10.5523 14.5523 11 14 11C13.4477 11 13 10.5523 13 10C13 9.44772 13.4477 9 14 9C14.5523 9 15 9.44772 15 10Z" />
      </mask>
      <path
        d="M13.5 18C13.5 18.2761 13.7239 18.5 14 18.5C14.2761 18.5 14.5 18.2761 14.5 18H13.5ZM14.5 14C14.5 13.7239 14.2761 13.5 14 13.5C13.7239 13.5 13.5 13.7239 13.5 14H14.5ZM14.5 18V14H13.5V18H14.5ZM23 14C23 18.9706 18.9706 23 14 23V25C20.0751 25 25 20.0751 25 14H23ZM14 23C9.02944 23 5 18.9706 5 14H3C3 20.0751 7.92487 25 14 25V23ZM5 14C5 9.02944 9.02944 5 14 5V3C7.92487 3 3 7.92487 3 14H5ZM14 5C18.9706 5 23 9.02944 23 14H25C25 7.92487 20.0751 3 14 3V5ZM14 10V12C15.1046 12 16 11.1046 16 10H14ZM14 10H12C12 11.1046 12.8954 12 14 12V10ZM14 10V8C12.8954 8 12 8.89543 12 10H14ZM14 10H16C16 8.89543 15.1046 8 14 8V10Z"
        fill={color}
        mask="url(#path-1-inside-1)"
      />
    </svg>
  );
};

export default Info;
