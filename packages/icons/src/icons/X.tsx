
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const X: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 8L8 20M8 8L20 20" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default X;
