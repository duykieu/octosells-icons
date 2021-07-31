
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Repeat: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 3L23 7M23 7L19 11M23 7H9C7.93913 7 6.92172 7.42143 6.17157 8.17157C5.42143 8.92172 5 9.93913 5 11V13M9 25L5 21M5 21L9 17M5 21H19C20.0609 21 21.0783 20.5786 21.8284 19.8284C22.5786 19.0783 23 18.0609 23 17V15" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Repeat;
