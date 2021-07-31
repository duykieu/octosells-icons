import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const CheckSquare: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M10 13L13 16L23 6M22 14V21C22 21.5304 21.7893 22.0391 21.4142 22.4142C21.0391 22.7893 20.5304 23 20 23H6C5.46957 23 4.96086 22.7893 4.58579 22.4142C4.21071 22.0391 4 21.5304 4 21V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H17"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CheckSquare;
