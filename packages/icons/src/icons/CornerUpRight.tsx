import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const CornerUpRight: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M17 16L22 11M22 11L17 6M22 11H10C8.93913 11 7.92172 11.4214 7.17157 12.1716C6.42143 12.9217 6 13.9391 6 15V22"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CornerUpRight;
