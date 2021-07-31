
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const CornerDownRight: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 12L22 17M22 17L17 22M22 17H10C8.93913 17 7.92172 16.5786 7.17157 15.8284C6.42143 15.0783 6 14.0609 6 13V6" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default CornerDownRight;
