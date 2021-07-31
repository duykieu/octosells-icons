import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Calendar: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M18 4V8M10 4V8M5 12H23M7 6H21C22.1046 6 23 6.89543 23 8V22C23 23.1046 22.1046 24 21 24H7C5.89543 24 5 23.1046 5 22V8C5 6.89543 5.89543 6 7 6Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Calendar;
