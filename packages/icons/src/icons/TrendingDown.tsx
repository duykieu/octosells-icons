import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const TrendingDown: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M25 20L15.5 10.5L10.5 15.5L3 8M25 20H19M25 20V14"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TrendingDown;
