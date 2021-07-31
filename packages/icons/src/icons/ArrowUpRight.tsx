
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ArrowUpRight: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19L19 9M19 9H9M19 9V19" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default ArrowUpRight;
