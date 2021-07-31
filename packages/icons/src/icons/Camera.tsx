import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Camera: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M25 21C25 21.5304 24.7893 22.0391 24.4142 22.4142C24.0391 22.7893 23.5304 23 23 23H5C4.46957 23 3.96086 22.7893 3.58579 22.4142C3.21071 22.0391 3 21.5304 3 21V10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8H9L11 5H17L19 8H23C23.5304 8 24.0391 8.21071 24.4142 8.58579C24.7893 8.96086 25 9.46957 25 10V21Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 19C16.2091 19 18 17.2091 18 15C18 12.7909 16.2091 11 14 11C11.7909 11 10 12.7909 10 15C10 17.2091 11.7909 19 14 19Z"
        stroke="#121212"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Camera;
