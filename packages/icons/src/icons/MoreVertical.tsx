
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const MoreVertical: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 21C13 21.5523 13.4477 22 14 22C14.5523 22 15 21.5523 15 21C15 20.4477 14.5523 20 14 20C13.4477 20 13 20.4477 13 21Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 7C13 7.55228 13.4477 8 14 8C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6C13.4477 6 13 6.44772 13 7Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default MoreVertical;
