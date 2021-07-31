import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const CameraOff: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    <svg
      width={width || size}
      height={height || size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3L25 25M17.28 17.28C16.9481 17.765 16.5134 18.171 16.0068 18.469C15.5002 18.7669 14.9342 18.9496 14.3489 19.004C13.7637 19.0584 13.1737 18.9831 12.6209 18.7836C12.0681 18.5841 11.566 18.2652 11.1504 17.8496C10.7348 17.434 10.4159 16.9319 10.2164 16.3791C10.0169 15.8263 9.94163 15.2363 9.99601 14.6511C10.0504 14.0658 10.2331 13.4998 10.531 12.9932C10.829 12.4866 11.235 12.0519 11.72 11.72M23 23H5C4.46957 23 3.96086 22.7893 3.58579 22.4142C3.21071 22.0391 3 21.5304 3 21V10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8H8L23 23ZM11 5H17L19 8H23C23.5304 8 24.0391 8.21071 24.4142 8.58579C24.7893 8.96086 25 9.46957 25 10V19.34L11 5Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CameraOff;
