
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Share: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 14V22C6 22.5304 6.21071 23.0391 6.58579 23.4142C6.96086 23.7893 7.46957 24 8 24H20C20.5304 24 21.0391 23.7893 21.4142 23.4142C21.7893 23.0391 22 22.5304 22 22V14M18 8L14 4M14 4L10 8M14 4V17" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Share;
