
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Pause: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6H8V22H12V6Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 6H16V22H20V6Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Pause;
