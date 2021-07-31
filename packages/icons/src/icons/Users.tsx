import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Users: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M19 23V21C19 19.9391 18.5786 18.9217 17.8284 18.1716C17.0783 17.4214 16.0609 17 15 17H7C5.93913 17 4.92172 17.4214 4.17157 18.1716C3.42143 18.9217 3 19.9391 3 21V23M25 23V21C24.9993 20.1137 24.7044 19.2528 24.1614 18.5523C23.6184 17.8519 22.8581 17.3516 22 17.13M18 5.13C18.8604 5.3503 19.623 5.8507 20.1676 6.55231C20.7122 7.25392 21.0078 8.11683 21.0078 9.005C21.0078 9.89317 20.7122 10.7561 20.1676 11.4577C19.623 12.1593 18.8604 12.6597 18 12.88M15 9C15 11.2091 13.2091 13 11 13C8.79086 13 7 11.2091 7 9C7 6.79086 8.79086 5 11 5C13.2091 5 15 6.79086 15 9Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Users;
