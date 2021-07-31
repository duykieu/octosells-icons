import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Crop: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M8.13 3L8 18C8 18.5304 8.21071 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20H25M3 8.13L18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V25"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Crop;
