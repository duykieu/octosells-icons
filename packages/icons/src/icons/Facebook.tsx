import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Facebook: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M19 4H16C14.6739 4 13.4021 4.52678 12.4645 5.46447C11.5268 6.40215 11 7.67392 11 9V12H8V16H11V24H15V16H18L19 12H15V9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8H19V4Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Facebook;
