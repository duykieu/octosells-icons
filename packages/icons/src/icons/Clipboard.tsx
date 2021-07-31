
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Clipboard: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V22C22 22.5304 21.7893 23.0391 21.4142 23.4142C21.0391 23.7893 20.5304 24 20 24H8C7.46957 24 6.96086 23.7893 6.58579 23.4142C6.21071 23.0391 6 22.5304 6 22V8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6H10M11 4H17C17.5523 4 18 4.44772 18 5V7C18 7.55228 17.5523 8 17 8H11C10.4477 8 10 7.55228 10 7V5C10 4.44772 10.4477 4 11 4Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Clipboard;
