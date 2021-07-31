
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Grocery: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H7L9.68 16.89C9.77144 17.3504 10.0219 17.764 10.3875 18.0583C10.7532 18.3526 11.2107 18.509 11.68 18.5H21.4C21.8693 18.509 22.3268 18.3526 22.6925 18.0583C23.0581 17.764 23.3086 17.3504 23.4 16.89L25 8.5H8M12 23.5C12 24.0523 11.5523 24.5 11 24.5C10.4477 24.5 10 24.0523 10 23.5C10 22.9477 10.4477 22.5 11 22.5C11.5523 22.5 12 22.9477 12 23.5ZM23 23.5C23 24.0523 22.5523 24.5 22 24.5C21.4477 24.5 21 24.0523 21 23.5C21 22.9477 21.4477 22.5 22 22.5C22.5523 22.5 23 22.9477 23 23.5Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Grocery;
