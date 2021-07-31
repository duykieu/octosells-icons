
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const MicOff: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.00302L25 25.003M17 11.343V6.00302C17.0007 5.25905 16.725 4.54134 16.2264 3.98922C15.7277 3.4371 15.0417 3.08996 14.3015 3.0152C13.5613 2.94043 12.8197 3.14336 12.2207 3.58461C11.6217 4.02586 11.208 4.67393 11.06 5.40302M19 18.953C18.0238 19.9494 16.7721 20.6315 15.4056 20.9116C14.0391 21.1918 12.62 21.0572 11.3305 20.5253C10.041 19.9934 8.93976 19.0883 8.16817 17.9262C7.39658 16.7641 6.9898 15.3979 7 14.003V12.003M21 12.003V14.003C20.9996 14.4155 20.9628 14.8271 20.89 15.233M14 21.003V25.003M10 25.003H18M11 11.003V14.003C11.0005 14.596 11.1768 15.1755 11.5064 15.6684C11.8361 16.1612 12.3045 16.5453 12.8523 16.7722C13.4002 16.999 14.0029 17.0584 14.5845 16.9429C15.1661 16.8273 15.7005 16.542 16.12 16.123L11 11.003Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default MicOff;
