
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Shield: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 24C14 24 22 20 22 14V7L14 4L6 7V14C6 20 14 24 14 24Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Shield;
