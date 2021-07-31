
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Monitor: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 23H18M14 19V23M6 5H22C23.1046 5 24 5.89543 24 7V17C24 18.1046 23.1046 19 22 19H6C4.89543 19 4 18.1046 4 17V7C4 5.89543 4.89543 5 6 5Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Monitor;
