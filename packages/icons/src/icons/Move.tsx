import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Move: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M7 11L4 14M4 14L7 17M4 14H24M11 7L14 4M14 4L17 7M14 4V24M17 21L14 24M14 24L11 21M21 11L24 14M24 14L21 17"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Move;
