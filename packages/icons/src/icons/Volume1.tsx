import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Volume1: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M19.54 10.46C20.4774 11.3976 21.0039 12.6692 21.0039 13.995C21.0039 15.3208 20.4774 16.5924 19.54 17.53M15 7L10 11H6V17H10L15 21V7Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Volume1;
