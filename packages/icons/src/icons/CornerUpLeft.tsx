
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const CornerUpLeft: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 16L6 11M6 11L11 6M6 11H18C19.0609 11 20.0783 11.4214 20.8284 12.1716C21.5786 12.9217 22 13.9391 22 15V22" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default CornerUpLeft;
