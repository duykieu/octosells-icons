import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Image: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M7 23H21C22.1046 23 23 22.1046 23 21V7C23 5.89543 22.1046 5 21 5H7C5.89543 5 5 5.89543 5 7V21C5 22.1046 5.89543 23 7 23ZM7 23L18 12L23 17M12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Image;
