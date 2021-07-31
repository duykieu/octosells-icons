
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Bell: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5C12.1435 5 10.363 5.7375 9.05025 7.05025C7.7375 8.36301 7 10.1435 7 12V17C7 17.7956 6.68393 18.5587 6.12132 19.1213C5.55871 19.6839 4.79565 20 4 20H24C23.2044 20 22.4413 19.6839 21.8787 19.1213C21.3161 18.5587 21 17.7956 21 17V12C21 10.1435 20.2625 8.36301 18.9497 7.05025C17.637 5.7375 15.8565 5 14 5ZM14 5V2M15.73 24C15.5542 24.3031 15.3018 24.5547 14.9982 24.7295C14.6946 24.9044 14.3504 24.9965 14 24.9965C13.6496 24.9965 13.3054 24.9044 13.0018 24.7295C12.6982 24.5547 12.4458 24.3031 12.27 24" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Bell;
