
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Tv: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 4L14 9L9 4M6 9H22C23.1046 9 24 9.89543 24 11V22C24 23.1046 23.1046 24 22 24H6C4.89543 24 4 23.1046 4 22V11C4 9.89543 4.89543 9 6 9Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Tv;
