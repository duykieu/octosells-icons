import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Home: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M11 24V14H17V24M5 11L14 4L23 11V22C23 22.5304 22.7893 23.0391 22.4142 23.4142C22.0391 23.7893 21.5304 24 21 24H7C6.46957 24 5.96086 23.7893 5.58579 23.4142C5.21071 23.0391 5 22.5304 5 22V11Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Home;
