import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Flag: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M6 17C6 17 7 16 10 16C13 16 15 18 18 18C21 18 22 17 22 17V5C22 5 21 6 18 6C15 6 13 4 10 4C7 4 6 5 6 5V17ZM6 17V24"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Flag;
