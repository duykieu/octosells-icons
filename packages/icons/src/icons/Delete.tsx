import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Delete: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M20 11L14 17M14 11L20 17M23 6H10L3 14L10 22H23C23.5304 22 24.0391 21.7893 24.4142 21.4142C24.7893 21.0391 25 20.5304 25 20V8C25 7.46957 24.7893 6.96086 24.4142 6.58579C24.0391 6.21071 23.5304 6 23 6Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Delete;
