import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Upload: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M23 17V21C23 21.5304 22.7893 22.0391 22.4142 22.4142C22.0391 22.7893 21.5304 23 21 23H7C6.46957 23 5.96086 22.7893 5.58579 22.4142C5.21071 22.0391 5 21.5304 5 21V17M19 10L14 5M14 5L9 10M14 5V17"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Upload;
