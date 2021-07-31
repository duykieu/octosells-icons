
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Rewind: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 21L4 14L13 7V21Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 21L15 14L24 7V21Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Rewind;
