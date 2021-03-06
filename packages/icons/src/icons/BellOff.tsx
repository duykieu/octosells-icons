import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const BellOff: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M10.56 4.9C11.6253 4.29888 12.8295 3.98741 14.0527 3.99662C15.2759 4.00583 16.4753 4.3354 17.5314 4.95249C18.5876 5.56958 19.4636 6.45265 20.0721 7.51372C20.6807 8.57478 21.0006 9.7768 21 11V15M15.73 23C15.5542 23.3031 15.3018 23.5547 14.9982 23.7295C14.6946 23.9044 14.3504 23.9965 14 23.9965C13.6496 23.9965 13.3054 23.9044 13.0018 23.7295C12.6982 23.5547 12.4458 23.3031 12.27 23M3 3L25 25M19 19H4C4.79565 19 5.55871 18.6839 6.12132 18.1213C6.68393 17.5587 7 16.7956 7 16V11C6.99859 9.87971 7.26608 8.77545 7.78 7.78L19 19Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default BellOff;
