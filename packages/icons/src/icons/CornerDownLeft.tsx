import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const CornerDownLeft: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M11 12L6 17M6 17L11 22M6 17H18C19.0609 17 20.0783 16.5786 20.8284 15.8284C21.5786 15.0783 22 14.0609 22 13V6"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CornerDownLeft;
