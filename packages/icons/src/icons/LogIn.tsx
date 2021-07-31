import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const LogIn: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M17 5H21C21.5304 5 22.0391 5.21071 22.4142 5.58579C22.7893 5.96086 23 6.46957 23 7V21C23 21.5304 22.7893 22.0391 22.4142 22.4142C22.0391 22.7893 21.5304 23 21 23H17M12 19L17 14M17 14L12 9M17 14H5"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LogIn;
