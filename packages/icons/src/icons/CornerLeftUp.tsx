
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const CornerLeftUp: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 11L11 6M11 6L6 11M11 6V18C11 19.0609 11.4214 20.0783 12.1716 20.8284C12.9217 21.5786 13.9391 22 15 22H22" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default CornerLeftUp;
