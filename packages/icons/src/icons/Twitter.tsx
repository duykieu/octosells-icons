import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Twitter: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M25 5.01006C24.0424 5.68553 22.9821 6.20217 21.86 6.54006C21.2577 5.84757 20.4573 5.35675 19.567 5.13398C18.6767 4.91122 17.7395 4.96725 16.8821 5.29451C16.0247 5.62177 15.2884 6.20446 14.773 6.96377C14.2575 7.72309 13.9877 8.62239 14 9.54006V10.5401C12.2426 10.5856 10.5013 10.1959 8.93101 9.4055C7.36074 8.61513 6.01032 7.44869 5 6.01006C5 6.01006 1 15.0101 10 19.0101C7.94053 20.408 5.48716 21.109 3 21.0101C12 26.0101 23 21.0101 23 9.51006C22.9991 9.23151 22.9723 8.95365 22.92 8.68006C23.9406 7.67355 24.6608 6.40277 25 5.01006V5.01006Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Twitter;
