import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Bold: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M7 14H15C16.0609 14 17.0783 13.5786 17.8284 12.8284C18.5786 12.0783 19 11.0609 19 10C19 8.93913 18.5786 7.92172 17.8284 7.17157C17.0783 6.42143 16.0609 6 15 6H7V14ZM7 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 19.0609 19.5786 20.0783 18.8284 20.8284C18.0783 21.5786 17.0609 22 16 22H7V14Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Bold;
