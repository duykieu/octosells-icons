import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const UserMinus: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M18 23V21C18 19.9391 17.5786 18.9217 16.8284 18.1716C16.0783 17.4214 15.0609 17 14 17H7C5.93913 17 4.92172 17.4214 4.17157 18.1716C3.42143 18.9217 3 19.9391 3 21V23M25 13H19M14.5 9C14.5 11.2091 12.7091 13 10.5 13C8.29086 13 6.5 11.2091 6.5 9C6.5 6.79086 8.29086 5 10.5 5C12.7091 5 14.5 6.79086 14.5 9Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default UserMinus;
