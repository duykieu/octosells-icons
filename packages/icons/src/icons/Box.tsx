
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Box: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 8L14 12.5L23.5 8M14 24.519V12.759M14.89 3.20894L22.89 7.20894C23.2233 7.37452 23.5037 7.62976 23.6998 7.94598C23.8959 8.2622 23.9999 8.62685 24 8.99894V18.5289C23.9999 18.901 23.8959 19.2657 23.6998 19.5819C23.5037 19.8981 23.2233 20.1534 22.89 20.3189L14.89 24.3189C14.6122 24.458 14.3058 24.5304 13.995 24.5304C13.6843 24.5304 13.3779 24.458 13.1 24.3189L5.10005 20.3189C4.76718 20.1512 4.4878 19.8938 4.29344 19.5758C4.09907 19.2577 3.99745 18.8917 4.00005 18.5189V8.99894C4.00025 8.62685 4.10424 8.2622 4.30033 7.94598C4.49642 7.62976 4.77684 7.37452 5.11005 7.20894L13.11 3.20894C13.3866 3.07151 13.6912 3 14 3C14.3089 3 14.6135 3.07151 14.89 3.20894Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Box;
