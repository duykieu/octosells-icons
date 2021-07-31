
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const EyeOff: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.12 16.12C15.8454 16.4147 15.5141 16.6512 15.1462 16.8151C14.7782 16.9791 14.3809 17.0673 13.9781 17.0744C13.5753 17.0815 13.1752 17.0074 12.8016 16.8565C12.4281 16.7056 12.0887 16.481 11.8038 16.1962C11.519 15.9113 11.2944 15.5719 11.1435 15.1984C10.9926 14.8248 10.9185 14.4247 10.9256 14.0219C10.9327 13.6191 11.0209 13.2218 11.1849 12.8538C11.3488 12.4859 11.5853 12.1546 11.88 11.88M3 3L25 25M19.94 19.94C18.2306 21.243 16.1491 21.9649 14 22C7 22 3 14 3 14C4.24389 11.6819 5.96914 9.65661 8.06 8.06L19.94 19.94ZM11.9 6.24C12.5883 6.07888 13.2931 5.99834 14 6C21 6 25 14 25 14C24.393 15.1356 23.6691 16.2047 22.84 17.19L11.9 6.24Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default EyeOff;
