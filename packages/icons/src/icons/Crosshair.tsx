import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Crosshair: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M24 14C24 19.5228 19.5228 24 14 24M24 14C24 8.47715 19.5228 4 14 4M24 14H20M14 24C8.47715 24 4 19.5228 4 14M14 24V20M4 14C4 8.47715 8.47715 4 14 4M4 14H8M14 4V8"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Crosshair;
