import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Youtube: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M24.5406 8.42C24.4218 7.94541 24.1799 7.51057 23.8392 7.15941C23.4986 6.80824 23.0713 6.55318 22.6006 6.42C20.8806 6 14.0006 6 14.0006 6C14.0006 6 7.12057 6 5.40057 6.46C4.92982 6.59318 4.50255 6.84824 4.16192 7.19941C3.82129 7.55057 3.57936 7.98541 3.46057 8.46C3.14579 10.2056 2.99181 11.9763 3.00057 13.75C2.98935 15.537 3.14334 17.3213 3.46057 19.08C3.59153 19.5398 3.83888 19.9581 4.17872 20.2945C4.51855 20.6308 4.93939 20.8738 5.40057 21C7.12057 21.46 14.0006 21.46 14.0006 21.46C14.0006 21.46 20.8806 21.46 22.6006 21C23.0713 20.8668 23.4986 20.6118 23.8392 20.2606C24.1799 19.9094 24.4218 19.4746 24.5406 19C24.8529 17.2676 25.0069 15.5103 25.0006 13.75C25.0118 11.963 24.8578 10.1787 24.5406 8.42Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.7506 17.02L17.5006 13.75L11.7506 10.48V17.02Z"
        stroke="#121212"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Youtube;
