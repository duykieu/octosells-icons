
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Maximize2: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 5H23M23 5V11M23 5L16 12M11 23H5M5 23V17M5 23L12 16" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Maximize2;
