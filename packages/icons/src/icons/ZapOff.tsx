
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ZapOff: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.41 8.75L15 4L12.57 6.92M20.57 14.91L23 12H17.66M10 10L5 16H14L13 24L18 18M3 3L25 25" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default ZapOff;
