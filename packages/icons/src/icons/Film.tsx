import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Film: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M9 4V24M19 4V24M4 14H24M4 9H9M4 19H9M19 19H24M19 9H24M6.18 4H21.82C23.024 4 24 4.97602 24 6.18V21.82C24 23.024 23.024 24 21.82 24H6.18C4.97602 24 4 23.024 4 21.82V6.18C4 4.97602 4.97602 4 6.18 4Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Film;
