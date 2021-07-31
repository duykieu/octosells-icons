import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Loader: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M14 4V8M14 20V24M6.93 6.93L9.76 9.76M18.24 18.24L21.07 21.07M4 14H8M20 14H24M6.93 21.07L9.76 18.24M18.24 9.76L21.07 6.93"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Loader;
