import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const CheckCircle: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M24 13.0857V14.0057C23.9988 16.1621 23.3005 18.2604 22.0093 19.9875C20.7182 21.7147 18.9033 22.9782 16.8354 23.5896C14.7674 24.201 12.5573 24.1276 10.5345 23.3803C8.51168 22.633 6.78465 21.2518 5.61096 19.4428C4.43727 17.6338 3.87979 15.4938 4.02168 13.342C4.16356 11.1903 4.99721 9.14205 6.39828 7.5028C7.79935 5.86354 9.69279 4.72111 11.7962 4.24587C13.8996 3.77063 16.1003 3.98806 18.07 4.86572M24 6.00574L14 16.0157L11 13.0157"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CheckCircle;
