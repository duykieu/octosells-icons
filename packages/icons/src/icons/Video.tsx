import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Video: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M25 9L18 14L25 19V9Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 7H5C3.89543 7 3 7.89543 3 9V19C3 20.1046 3.89543 21 5 21H16C17.1046 21 18 20.1046 18 19V9C18 7.89543 17.1046 7 16 7Z"
        stroke="#121212"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Video;
