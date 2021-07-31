
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Volume2: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.07 7C22.9447 8.87528 23.9979 11.4184 23.9979 14.07C23.9979 16.7216 22.9447 19.2647 21.07 21.14M17.54 10.53C18.4774 11.4676 19.0039 12.7392 19.0039 14.065C19.0039 15.3908 18.4774 16.6624 17.54 17.6M13 7.07L8 11.07H4V17.07H8L13 21.07V7.07Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Volume2;
