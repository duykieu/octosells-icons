
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const PieChart: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2104 17.89C22.5742 19.3945 21.5792 20.7202 20.3123 21.7513C19.0454 22.7824 17.5452 23.4874 15.9428 23.8048C14.3405 24.1221 12.6848 24.0421 11.1205 23.5718C9.55627 23.1014 8.13103 22.2551 6.96942 21.1067C5.80782 19.9582 4.94522 18.5428 4.45704 16.9839C3.96886 15.4251 3.86996 13.7705 4.169 12.1646C4.46804 10.5588 5.1559 9.05063 6.17245 7.77203C7.189 6.49343 8.50329 5.48332 10.0004 4.83M24.0004 14C24.0004 12.6868 23.7417 11.3864 23.2392 10.1732C22.7367 8.95991 22.0001 7.85752 21.0715 6.92893C20.1429 6.00035 19.0405 5.26375 17.8272 4.7612C16.614 4.25866 15.3136 4 14.0004 4V14H24.0004Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default PieChart;
