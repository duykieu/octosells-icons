
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Heart: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4578 6.59133C21.9691 6.08683 21.3889 5.68663 20.7503 5.41358C20.1117 5.14054 19.4272 5 18.7359 5C18.0446 5 17.3601 5.14054 16.7215 5.41358C16.0829 5.68663 15.5026 6.08683 15.0139 6.59133L13.9997 7.63785L12.9855 6.59133C11.9984 5.57276 10.6596 5.00053 9.26361 5.00053C7.86761 5.00053 6.52879 5.57276 5.54168 6.59133C4.55456 7.6099 4 8.99139 4 10.4319C4 11.8723 4.55456 13.2538 5.54168 14.2724L6.55588 15.3189L13.9997 23L21.4436 15.3189L22.4578 14.2724C22.9467 13.7681 23.3346 13.1694 23.5992 12.5105C23.8638 11.8515 24 11.1452 24 10.4319C24 9.71857 23.8638 9.01225 23.5992 8.35328C23.3346 7.69431 22.9467 7.09559 22.4578 6.59133V6.59133Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Heart;
