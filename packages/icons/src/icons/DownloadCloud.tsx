import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const DownloadCloud: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M10.009 19.0117L14.009 23.0117M14.009 23.0117L18.009 19.0117M14.009 23.0117V14.0117M22.889 20.1017C23.7584 19.4903 24.4103 18.6178 24.7503 17.6108C25.0902 16.6038 25.1004 15.5147 24.7794 14.5015C24.4584 13.4883 23.8228 12.6037 22.965 11.9762C22.1072 11.3487 21.0718 11.0108 20.009 11.0117H18.749C18.4482 9.83952 17.8855 8.7509 17.1031 7.82773C16.3207 6.90456 15.3391 6.17091 14.2322 5.68201C13.1252 5.1931 11.9218 4.96168 10.7125 5.00517C9.50317 5.04866 8.31948 5.36592 7.25052 5.93308C6.18156 6.50023 5.25519 7.3025 4.54115 8.27948C3.82712 9.25646 3.34402 10.3827 3.12823 11.5734C2.91244 12.7641 2.96958 13.9882 3.29535 15.1537C3.62112 16.3191 4.20703 17.3954 5.00897 18.3017"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DownloadCloud;
