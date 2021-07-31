import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const User: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M22 23V21C22 19.9391 21.5786 18.9217 20.8284 18.1716C20.0783 17.4214 19.0609 17 18 17H10C8.93913 17 7.92172 17.4214 7.17157 18.1716C6.42143 18.9217 6 19.9391 6 21V23M18 9C18 11.2091 16.2091 13 14 13C11.7909 13 10 11.2091 10 9C10 6.79086 11.7909 5 14 5C16.2091 5 18 6.79086 18 9Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default User;
