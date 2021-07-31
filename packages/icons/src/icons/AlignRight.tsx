
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const AlignRight: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 12H9M23 8H5M23 16H5M23 20H9" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default AlignRight;
