import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Briefcase: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M18 23V7C18 6.46957 17.7893 5.96086 17.4142 5.58579C17.0391 5.21071 16.5304 5 16 5H12C11.4696 5 10.9609 5.21071 10.5858 5.58579C10.2107 5.96086 10 6.46957 10 7V23M6 9H22C23.1046 9 24 9.89543 24 11V21C24 22.1046 23.1046 23 22 23H6C4.89543 23 4 22.1046 4 21V11C4 9.89543 4.89543 9 6 9Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Briefcase;
