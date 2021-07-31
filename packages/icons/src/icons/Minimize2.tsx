import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Minimize2: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M6 16H12M12 16V22M12 16L5 23M22 12H16M16 12V6M16 12L23 5"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Minimize2;
