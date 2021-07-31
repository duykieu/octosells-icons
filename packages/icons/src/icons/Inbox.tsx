
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Inbox: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 14H18L16 17H12L10 14H4M24 14V20C24 20.5304 23.7893 21.0391 23.4142 21.4142C23.0391 21.7893 22.5304 22 22 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V14M24 14L20.55 7.11C20.3844 6.77679 20.1292 6.49637 19.813 6.30028C19.4967 6.10419 19.1321 6.0002 18.76 6H9.24C8.86792 6.0002 8.50326 6.10419 8.18704 6.30028C7.87083 6.49637 7.61558 6.77679 7.45 7.11L4 14" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Inbox;
