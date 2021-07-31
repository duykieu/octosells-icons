
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ArrowDown: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 7V21M14 21L21 14M14 21L7 14" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default ArrowDown;
