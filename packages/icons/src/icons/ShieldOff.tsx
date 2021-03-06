import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ShieldOff: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M21.69 16C21.8911 15.3522 21.9955 14.6783 22 14V7L14 4L10.84 5.18M6.73 6.73L6 7V14C6 20 14 24 14 24C16.117 22.8829 18.0197 21.4001 19.62 19.62M3 3L25 25"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ShieldOff;
