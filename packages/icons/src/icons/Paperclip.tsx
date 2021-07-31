
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Paperclip: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.4383 13.6622L14.2483 22.8522C13.1225 23.9781 11.5955 24.6106 10.0033 24.6106C8.41115 24.6106 6.88418 23.9781 5.75834 22.8522C4.63249 21.7264 4 20.1994 4 18.6072C4 17.015 4.63249 15.4881 5.75834 14.3622L14.9483 5.17222C15.6989 4.42166 16.7169 4 17.7783 4C18.8398 4 19.8578 4.42166 20.6083 5.17222C21.3589 5.92279 21.7806 6.94077 21.7806 8.00222C21.7806 9.06368 21.3589 10.0817 20.6083 10.8322L11.4083 20.0222C11.0331 20.3975 10.5241 20.6083 9.99334 20.6083C9.46261 20.6083 8.95362 20.3975 8.57834 20.0222C8.20306 19.6469 7.99222 19.138 7.99222 18.6072C7.99222 18.0765 8.20306 17.5675 8.57834 17.1922L17.0683 8.71222" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Paperclip;
