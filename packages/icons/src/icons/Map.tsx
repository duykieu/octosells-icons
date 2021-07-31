
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Map: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20L3 24V8L10 4M10 20L18 24M10 20V4M18 24L25 20V4L18 8M18 24V8M18 8L10 4" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Map;
