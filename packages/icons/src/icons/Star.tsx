
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Star: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4L17.09 10.26L24 11.27L19 16.14L20.18 23.02L14 19.77L7.82 23.02L9 16.14L4 11.27L10.91 10.26L14 4Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Star;
