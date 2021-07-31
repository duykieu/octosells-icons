import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const CornerRightUp: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M12 11L17 6M17 6L22 11M17 6V18C17 19.0609 16.5786 20.0783 15.8284 20.8284C15.0783 21.5786 14.0609 22 13 22H6"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CornerRightUp;
