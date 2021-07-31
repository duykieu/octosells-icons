
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Download: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 17.0001V21.0001C23 21.5305 22.7893 22.0392 22.4142 22.4143C22.0391 22.7894 21.5304 23.0001 21 23.0001H7C6.46957 23.0001 5.96086 22.7894 5.58579 22.4143C5.21071 22.0392 5 21.5305 5 21.0001V17.0001M9 12L14 17M14 17L19 12M14 17V5" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Download;
