import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const RefreshCw: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M25 5.99763V11.9976M25 11.9976H19M25 11.9976L20.36 7.63763C19.2853 6.56235 17.9556 5.77684 16.4952 5.35441C15.0348 4.93198 13.4911 4.88639 12.0083 5.22189C10.5255 5.5574 9.1518 6.26307 8.01547 7.27305C6.87913 8.28304 6.01717 9.56442 5.51 10.9976M3 21.9976V15.9976M3 15.9976H9M3 15.9976L7.64 20.3576C8.71475 21.4329 10.0444 22.2184 11.5048 22.6409C12.9652 23.0633 14.5089 23.1089 15.9917 22.7734C17.4745 22.4379 18.8482 21.7322 19.9845 20.7222C21.1209 19.7122 21.9828 18.4308 22.49 16.9976"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RefreshCw;
