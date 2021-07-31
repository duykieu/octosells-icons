import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const XCircle: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M17 11L11 17M11 11L17 17M24 14C24 19.5228 19.5228 24 14 24C8.47715 24 4 19.5228 4 14C4 8.47715 8.47715 4 14 4C19.5228 4 24 8.47715 24 14Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default XCircle;
