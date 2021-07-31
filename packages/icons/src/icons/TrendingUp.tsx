import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const TrendingUp: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M25 8L15.5 17.5L10.5 12.5L3 20M25 8H19M25 8V14"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TrendingUp;
