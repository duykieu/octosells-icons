
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const BarChart2: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22V12M14 22V6M8 22V16" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default BarChart2;
