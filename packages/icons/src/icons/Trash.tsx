import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Trash: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M5 8H23M10 8V6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4H16C16.5304 4 17.0391 4.21071 17.4142 4.58579C17.7893 4.96086 18 5.46957 18 6V8M21 8V22C21 22.5304 20.7893 23.0391 20.4142 23.4142C20.0391 23.7893 19.5304 24 19 24H9C8.46957 24 7.96086 23.7893 7.58579 23.4142C7.21071 23.0391 7 22.5304 7 22V8H21Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Trash;
