import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Sliders: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M6 23V16M6 12V5M14 23V14M14 10V5M22 23V18M22 14V5M3 16H9M11 10H17M19 18H25"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Sliders;
