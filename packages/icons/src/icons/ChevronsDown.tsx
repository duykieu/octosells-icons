
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ChevronsDown: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 15L14 20L19 15M9 8L14 13L19 8" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default ChevronsDown;
