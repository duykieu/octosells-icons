import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Tablet: React.FunctionComponent<IOctosellsIcons> = ({
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
      <mask id="path-1-inside-1" fill="white">
        <path d="M8 24H20C21.1046 24 22 23.1046 22 22V6C22 4.89543 21.1046 4 20 4H8C6.89543 4 6 4.89543 6 6V22C6 23.1046 6.89543 24 8 24Z" />
        <path d="M15 20C15 20.5523 14.5523 21 14 21C13.4477 21 13 20.5523 13 20C13 19.4477 13.4477 19 14 19C14.5523 19 15 19.4477 15 20Z" />
      </mask>
      <path
        d="M20 23H8V25H20V23ZM8 23C7.44772 23 7 22.5523 7 22H5C5 23.6569 6.34315 25 8 25V23ZM7 22V6H5V22H7ZM7 6C7 5.44771 7.44772 5 8 5V3C6.34315 3 5 4.34314 5 6H7ZM8 5H20V3H8V5ZM20 5C20.5523 5 21 5.44771 21 6H23C23 4.34314 21.6569 3 20 3V5ZM21 6V22H23V6H21ZM21 22C21 22.5523 20.5523 23 20 23V25C21.6569 25 23 23.6569 23 22H21ZM14 20V22C15.1046 22 16 21.1046 16 20H14ZM14 20H12C12 21.1046 12.8954 22 14 22V20ZM14 20V18C12.8954 18 12 18.8954 12 20H14ZM14 20H16C16 18.8954 15.1046 18 14 18V20Z"
        fill={color}
        mask="url(#path-1-inside-1)"
      />
    </svg>
  );
};

export default Tablet;
