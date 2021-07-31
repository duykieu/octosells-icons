import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const VolumeX: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M24 11L18 17M18 11L24 17M12 7L7 11H3V17H7L12 21V7Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default VolumeX;
