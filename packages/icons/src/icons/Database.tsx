
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Database: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 7C23 8.65685 18.9706 10 14 10C9.02944 10 5 8.65685 5 7M23 7C23 5.34315 18.9706 4 14 4C9.02944 4 5 5.34315 5 7M23 7V21C23 22.66 19 24 14 24C9 24 5 22.66 5 21V7M23 14C23 15.66 19 17 14 17C9 17 5 15.66 5 14" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Database;
