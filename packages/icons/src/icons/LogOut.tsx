
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const LogOut: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 23H7C6.46957 23 5.96086 22.7893 5.58579 22.4142C5.21071 22.0391 5 21.5304 5 21V7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5H11M18 19L23 14M23 14L18 9M23 14H11" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default LogOut;
