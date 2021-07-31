import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Layout: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M5 11H23M11 23V11M7 5H21C22.1046 5 23 5.89543 23 7V21C23 22.1046 22.1046 23 21 23H7C5.89543 23 5 22.1046 5 21V7C5 5.89543 5.89543 5 7 5Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Layout;
