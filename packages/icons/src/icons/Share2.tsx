import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Share2: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M10.59 15.51L17.42 19.49M17.41 8.51L10.59 12.49M23 7C23 8.65685 21.6569 10 20 10C18.3431 10 17 8.65685 17 7C17 5.34315 18.3431 4 20 4C21.6569 4 23 5.34315 23 7ZM11 14C11 15.6569 9.65685 17 8 17C6.34315 17 5 15.6569 5 14C5 12.3431 6.34315 11 8 11C9.65685 11 11 12.3431 11 14ZM23 21C23 22.6569 21.6569 24 20 24C18.3431 24 17 22.6569 17 21C17 19.3431 18.3431 18 20 18C21.6569 18 23 19.3431 23 21Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Share2;
