
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ToggleLeft: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 7H10C6.13401 7 3 10.134 3 14C3 17.866 6.13401 21 10 21H18C21.866 21 25 17.866 25 14C25 10.134 21.866 7 18 7Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17C11.6569 17 13 15.6569 13 14C13 12.3431 11.6569 11 10 11C8.34315 11 7 12.3431 7 14C7 15.6569 8.34315 17 10 17Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default ToggleLeft;
