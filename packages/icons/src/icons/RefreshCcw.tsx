import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const RefreshCcw: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M3 5.99763V11.9976M3 11.9976H9M3 11.9976L7.64 7.63763C8.71475 6.56235 10.0444 5.77684 11.5048 5.35441C12.9652 4.93198 14.5089 4.88639 15.9917 5.22189C17.4745 5.5574 18.8482 6.26307 19.9845 7.27305C21.1209 8.28304 21.9828 9.56442 22.49 10.9976M25 21.9976V15.9976M25 15.9976H19M25 15.9976L20.36 20.3576C19.2853 21.4329 17.9556 22.2184 16.4952 22.6409C15.0348 23.0633 13.4911 23.1089 12.0083 22.7734C10.5255 22.4379 9.1518 21.7322 8.01547 20.7222C6.87913 19.7122 6.01717 18.4308 5.51 16.9976"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RefreshCcw;
