import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Cpu: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M11 3V6M17 3V6M11 22V25M17 22V25M22 11H25M22 16H25M3 11H6M3 16H6M8 6H20C21.1046 6 22 6.89543 22 8V20C22 21.1046 21.1046 22 20 22H8C6.89543 22 6 21.1046 6 20V8C6 6.89543 6.89543 6 8 6ZM11 11H17V17H11V11Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Cpu;
