
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Rss: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 13C8.38695 13 10.6761 13.9482 12.364 15.636C14.0518 17.3239 15 19.6131 15 22M6 6C10.2435 6 14.3131 7.68571 17.3137 10.6863C20.3143 13.6869 22 17.7565 22 22M8 21C8 21.5523 7.55228 22 7 22C6.44772 22 6 21.5523 6 21C6 20.4477 6.44772 20 7 20C7.55228 20 8 20.4477 8 21Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Rss;
