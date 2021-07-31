import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ToggleRight: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M18 7H10C6.13401 7 3 10.134 3 14C3 17.866 6.13401 21 10 21H18C21.866 21 25 17.866 25 14C25 10.134 21.866 7 18 7Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 17C19.6569 17 21 15.6569 21 14C21 12.3431 19.6569 11 18 11C16.3431 11 15 12.3431 15 14C15 15.6569 16.3431 17 18 17Z"
        stroke="#121212"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ToggleRight;
