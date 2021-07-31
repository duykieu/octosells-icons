import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Grid: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M12 5H5V12H12V5Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23 5H16V12H23V5Z"
        stroke="#121212"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23 16H16V23H23V16Z"
        stroke="#121212"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 16H5V23H12V16Z"
        stroke="#121212"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Grid;
