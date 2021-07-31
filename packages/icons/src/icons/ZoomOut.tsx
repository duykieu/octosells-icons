
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ZoomOut: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 23L18.65 18.65M10 13H16M21 13C21 17.4183 17.4183 21 13 21C8.58172 21 5 17.4183 5 13C5 8.58172 8.58172 5 13 5C17.4183 5 21 8.58172 21 13Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default ZoomOut;
