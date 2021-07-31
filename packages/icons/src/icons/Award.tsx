import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Award: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M10.21 15.89L9 25L14 22L19 25L17.79 15.88M21 10C21 13.866 17.866 17 14 17C10.134 17 7 13.866 7 10C7 6.13401 10.134 3 14 3C17.866 3 21 6.13401 21 10Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Award;
