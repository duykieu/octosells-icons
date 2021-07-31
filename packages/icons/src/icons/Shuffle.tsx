
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Shuffle: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 5H22M22 5V10M22 5L5 22M22 18V23M22 23H17M22 23L16 17M5 6L10 11" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Shuffle;
