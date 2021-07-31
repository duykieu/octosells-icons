
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const AlignLeft: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5M23 8H5M23 16H5M19 20H5" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default AlignLeft;
