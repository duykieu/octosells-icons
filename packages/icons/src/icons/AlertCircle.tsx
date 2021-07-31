import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const AlertCircle: React.FunctionComponent<IOctosellsIcons> = ({
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
        <path d="M15 18C15 18.5523 14.5523 19 14 19C13.4477 19 13 18.5523 13 18C13 17.4477 13.4477 17 14 17C14.5523 17 15 17.4477 15 18Z" />
      </mask>
      <path
        d="M14.5 10C14.5 9.72386 14.2761 9.5 14 9.5C13.7239 9.5 13.5 9.72386 13.5 10H14.5ZM13.5 14C13.5 14.2761 13.7239 14.5 14 14.5C14.2761 14.5 14.5 14.2761 14.5 14H13.5ZM13.5 10V14H14.5V10H13.5ZM23 14C23 18.9706 18.9706 23 14 23V25C20.0751 25 25 20.0751 25 14H23ZM14 23C9.02944 23 5 18.9706 5 14H3C3 20.0751 7.92487 25 14 25V23ZM5 14C5 9.02944 9.02944 5 14 5V3C7.92487 3 3 7.92487 3 14H5ZM14 5C18.9706 5 23 9.02944 23 14H25C25 7.92487 20.0751 3 14 3V5ZM14 18V20C15.1046 20 16 19.1046 16 18H14ZM14 18H12C12 19.1046 12.8954 20 14 20V18ZM14 18V16C12.8954 16 12 16.8954 12 18H14ZM14 18H16C16 16.8954 15.1046 16 14 16V18Z"
        fill={color}
        mask="url(#path-1-inside-1)"
      />
    </svg>
  );
};

export default AlertCircle;
