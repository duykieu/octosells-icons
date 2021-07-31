
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ChevronLeft: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20L11 14L17 8" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default ChevronLeft;
