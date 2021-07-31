import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const CornerRightDown: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M12 17L17 22M17 22L22 17M17 22V10C17 8.93913 16.5786 7.92172 15.8284 7.17157C15.0783 6.42143 14.0609 6 13 6H6"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CornerRightDown;
