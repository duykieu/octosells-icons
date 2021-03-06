import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ATM: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M8.50867 10.1483H7.32647C5.95359 10.1483 4.84766 9.04237 4.84766 7.66949V7.47881C4.84766 6.10593 5.95359 5 7.32647 5H20.7121C22.0468 5 23.1527 6.10593 23.1527 7.47881V7.66949C23.1527 9.04237 22.0468 10.1483 20.6739 10.1483H19.6824M14.8773 8.77539V21.4364M19.4917 22.2373C19.4917 22.6568 19.1485 23 18.729 23H9.27138C8.85189 23 8.50867 22.6568 8.50867 22.2373V7.82201C8.50867 7.40252 8.85189 7.0593 9.27138 7.0593H18.729C19.1485 7.0593 19.4917 7.40252 19.4917 7.82201V22.2373Z"
        stroke={color}
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default ATM;
