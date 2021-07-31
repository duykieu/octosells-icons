import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Linkedin: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M18 10C19.5913 10 21.1174 10.6321 22.2426 11.7574C23.3679 12.8826 24 14.4087 24 16V23H20V16C20 15.4696 19.7893 14.9609 19.4142 14.5858C19.0391 14.2107 18.5304 14 18 14C17.4696 14 16.9609 14.2107 16.5858 14.5858C16.2107 14.9609 16 15.4696 16 16V23H12V16C12 14.4087 12.6321 12.8826 13.7574 11.7574C14.8826 10.6321 16.4087 10 18 10Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 11H4V23H8V11Z"
        stroke="#121212"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
        stroke="#121212"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Linkedin;
