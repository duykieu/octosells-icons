import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Anchor: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M14 10C15.6569 10 17 8.65685 17 7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7C11 8.65685 12.3431 10 14 10ZM14 10V24M14 24C11.3478 24 8.8043 22.9464 6.92893 21.0711C5.05357 19.1957 4 16.6522 4 14H7M14 24C16.6522 24 19.1957 22.9464 21.0711 21.0711C22.9464 19.1957 24 16.6522 24 14H21"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Anchor;
