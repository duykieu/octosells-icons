
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Eye: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 14C3 14 7 6 14 6C21 6 25 14 25 14C25 14 21 22 14 22C7 22 3 14 3 14Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 17C15.6569 17 17 15.6569 17 14C17 12.3431 15.6569 11 14 11C12.3431 11 11 12.3431 11 14C11 15.6569 12.3431 17 14 17Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Eye;
