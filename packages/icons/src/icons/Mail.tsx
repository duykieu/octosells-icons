
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Mail: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 8C24 6.9 23.1 6 22 6H6C4.9 6 4 6.9 4 8M24 8V20C24 21.1 23.1 22 22 22H6C4.9 22 4 21.1 4 20V8M24 8L14 15L4 8" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Mail;
