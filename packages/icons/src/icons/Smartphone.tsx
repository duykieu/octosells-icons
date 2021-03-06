import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Smartphone: React.FunctionComponent<IOctosellsIcons> = ({
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
        <path d="M19 4H9C7.89543 4 7 4.89543 7 6V22C7 23.1046 7.89543 24 9 24H19C20.1046 24 21 23.1046 21 22V6C21 4.89543 20.1046 4 19 4Z" />
        <path d="M15 20C15 20.5523 14.5523 21 14 21C13.4477 21 13 20.5523 13 20C13 19.4477 13.4477 19 14 19C14.5523 19 15 19.4477 15 20Z" />
      </mask>
      <path
        d="M9 5H19V3H9V5ZM19 5C19.5523 5 20 5.44772 20 6H22C22 4.34315 20.6569 3 19 3V5ZM20 6V22H22V6H20ZM20 22C20 22.5523 19.5523 23 19 23V25C20.6569 25 22 23.6569 22 22H20ZM19 23H9V25H19V23ZM9 23C8.44771 23 8 22.5523 8 22H6C6 23.6569 7.34315 25 9 25V23ZM8 22V6H6V22H8ZM8 6C8 5.44772 8.44772 5 9 5V3C7.34315 3 6 4.34315 6 6H8ZM14 20V22C15.1046 22 16 21.1046 16 20H14ZM14 20H12C12 21.1046 12.8954 22 14 22V20ZM14 20V18C12.8954 18 12 18.8954 12 20H14ZM14 20H16C16 18.8954 15.1046 18 14 18V20Z"
        fill={color}
        mask="url(#path-1-inside-1)"
      />
    </svg>
  );
};

export default Smartphone;
