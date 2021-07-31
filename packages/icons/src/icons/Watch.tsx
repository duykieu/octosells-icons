
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Watch: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 11V14L15.5 15.5M18.51 19.35L18.16 23.18C18.1149 23.6787 17.8845 24.1423 17.5142 24.4792C17.1439 24.8162 16.6607 25.002 16.16 25H11.83C11.3293 25.002 10.8461 24.8162 10.4758 24.4792C10.1055 24.1423 9.87506 23.6787 9.83 23.18L9.48 19.35M9.49 8.65002L9.84 4.82002C9.8849 4.32309 10.1139 3.8609 10.4821 3.52417C10.8503 3.18744 11.3311 3.00049 11.83 3.00002H16.18C16.6807 2.99798 17.1639 3.18381 17.5342 3.52079C17.9045 3.85776 18.1349 4.32137 18.18 4.82002L18.53 8.65002M21 14C21 17.866 17.866 21 14 21C10.134 21 7 17.866 7 14C7 10.134 10.134 7.00002 14 7.00002C17.866 7.00002 21 10.134 21 14Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Watch;
