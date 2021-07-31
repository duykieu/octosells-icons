
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const CreditCard: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12H25M5 6H23C24.1046 6 25 6.89543 25 8V20C25 21.1046 24.1046 22 23 22H5C3.89543 22 3 21.1046 3 20V8C3 6.89543 3.89543 6 5 6Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default CreditCard;
