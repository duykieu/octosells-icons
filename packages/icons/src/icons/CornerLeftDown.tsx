import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const CornerLeftDown: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M16 17L11 22M11 22L6 17M11 22V10C11 8.93913 11.4214 7.92172 12.1716 7.17157C12.9217 6.42143 13.9391 6 15 6H22"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CornerLeftDown;
