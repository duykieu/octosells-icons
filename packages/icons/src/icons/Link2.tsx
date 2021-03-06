import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Link2: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M17 9H20C20.6566 9 21.3068 9.12933 21.9134 9.3806C22.52 9.63188 23.0712 10.0002 23.5355 10.4645C23.9998 10.9288 24.3681 11.48 24.6194 12.0866C24.8707 12.6932 25 13.3434 25 14C25 14.6566 24.8707 15.3068 24.6194 15.9134C24.3681 16.52 23.9998 17.0712 23.5355 17.5355C23.0712 17.9998 22.52 18.3681 21.9134 18.6194C21.3068 18.8707 20.6566 19 20 19H17M11 19H8C7.34339 19 6.69321 18.8707 6.08658 18.6194C5.47995 18.3681 4.92876 17.9998 4.46447 17.5355C3.52678 16.5979 3 15.3261 3 14C3 12.6739 3.52678 11.4021 4.46447 10.4645C5.40215 9.52678 6.67392 9 8 9H11M10 14H18"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Link2;
