
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ArrowDownLeft: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9L9 19M9 19H19M9 19V9" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default ArrowDownLeft;
