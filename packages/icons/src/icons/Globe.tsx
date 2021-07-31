
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Globe: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 13C24 18.5228 19.5228 23 14 23M24 13C24 7.47715 19.5228 3 14 3M24 13H4M14 23C8.47715 23 4 18.5228 4 13M14 23C16.5013 20.2616 17.9228 16.708 18 13C17.9228 9.29203 16.5013 5.73835 14 3M14 23C11.4987 20.2616 10.0772 16.708 10 13C10.0772 9.29203 11.4987 5.73835 14 3M4 13C4 7.47715 8.47715 3 14 3" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Globe;
