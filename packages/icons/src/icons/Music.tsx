import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Music: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M11 19H7C6.46957 19 5.96086 19.2107 5.58579 19.5858C5.21071 19.9609 5 20.4696 5 21C5 21.5304 5.21071 22.0391 5.58579 22.4142C5.96086 22.7893 6.46957 23 7 23H9C9.53043 23 10.0391 22.7893 10.4142 22.4142C10.7893 22.0391 11 21.5304 11 21V19ZM11 19V7L23 5V17M23 17H19C18.4696 17 17.9609 17.2107 17.5858 17.5858C17.2107 17.9609 17 18.4696 17 19C17 19.5304 17.2107 20.0391 17.5858 20.4142C17.9609 20.7893 18.4696 21 19 21H21C21.5304 21 22.0391 20.7893 22.4142 20.4142C22.7893 20.0391 23 19.5304 23 19V17Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Music;
