import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const StopCircle: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17 11H11V17H17V11Z"
        stroke="#121212"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default StopCircle;
