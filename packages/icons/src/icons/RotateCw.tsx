import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const RotateCw: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M23.996 5.99806V11.9981M23.996 11.9981H17.996M23.996 11.9981L19.366 7.63806C17.9866 6.2578 16.196 5.36325 14.2639 5.0892C12.3319 4.81516 10.3631 5.17648 8.65433 6.1187C6.94551 7.06092 5.58922 8.53301 4.78984 10.3131C3.99045 12.0932 3.79128 14.085 4.22234 15.9881C4.6534 17.8913 5.69133 19.6028 7.17973 20.8647C8.66813 22.1267 10.5264 22.8707 12.4744 22.9846C14.4224 23.0986 16.3547 22.5764 17.9801 21.4966C19.6055 20.4168 20.8359 18.838 21.486 16.9981"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RotateCw;
