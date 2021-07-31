
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Radio: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2379 9.83C18.7957 10.3872 19.2383 11.049 19.5402 11.7774C19.8422 12.5057 19.9976 13.2865 19.9976 14.075C19.9976 14.8635 19.8422 15.6443 19.5402 16.3726C19.2383 17.101 18.7957 17.7628 18.2379 18.32M9.75786 18.31C9.20001 17.7528 8.75745 17.091 8.45551 16.3626C8.15356 15.6343 7.99814 14.8535 7.99814 14.065C7.99814 13.2765 8.15356 12.4957 8.45551 11.7674C8.75745 11.039 9.20001 10.3772 9.75786 9.82M21.0679 7C22.9426 8.87528 23.9957 11.4184 23.9957 14.07C23.9957 16.7216 22.9426 19.2647 21.0679 21.14M6.92786 21.14C5.05315 19.2647 4 16.7216 4 14.07C4 11.4184 5.05315 8.87528 6.92786 7M15.9979 14.07C15.9979 15.1746 15.1024 16.07 13.9979 16.07C12.8933 16.07 11.9979 15.1746 11.9979 14.07C11.9979 12.9654 12.8933 12.07 13.9979 12.07C15.1024 12.07 15.9979 12.9654 15.9979 14.07Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Radio;
