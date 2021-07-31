import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Gift: React.FunctionComponent<IOctosellsIcons> = ({
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
      <path
        d="M22 14V24H6V14M14 24V9M14 9H9.5C8.83696 9 8.20107 8.73661 7.73223 8.26777C7.26339 7.79893 7 7.16304 7 6.5C7 5.83696 7.26339 5.20107 7.73223 4.73223C8.20107 4.26339 8.83696 4 9.5 4C13 4 14 9 14 9ZM14 9H18.5C19.163 9 19.7989 8.73661 20.2678 8.26777C20.7366 7.79893 21 7.16304 21 6.5C21 5.83696 20.7366 5.20107 20.2678 4.73223C19.7989 4.26339 19.163 4 18.5 4C15 4 14 9 14 9ZM4 9H24V14H4V9Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Gift;
