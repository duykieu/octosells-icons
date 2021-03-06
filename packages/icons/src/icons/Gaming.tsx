import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Gaming: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M23.6766 13.2397C22.8424 9.61098 20.5901 7.02498 18.7132 7.44208C18.1293 7.56721 17.6705 7.9843 17.2951 8.56824C17.2951 8.56824 14.3337 10.5703 10.7049 8.56824C10.3295 7.9843 9.87074 7.56721 9.28681 7.44208C7.40987 7.02498 5.15755 9.61098 4.32336 13.2397C3.48916 16.8685 4.32336 20.1635 6.20029 20.5806C7.82697 20.956 11.6643 16.3262 11.6643 16.3262C11.6643 16.3262 14 14.1156 16.0021 16.3262C16.0021 16.3262 20.173 20.956 21.7997 20.5806C23.6766 20.1218 24.5108 16.8685 23.6766 13.2397Z"
        stroke={color}
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <path
        d="M19.8811 11.2377C19.8811 11.7382 19.464 12.1553 18.9635 12.1553C18.463 12.1553 18.0459 11.7382 18.0459 11.2377C18.0459 10.7372 18.463 10.3201 18.9635 10.3201C19.464 10.3201 19.8811 10.7372 19.8811 11.2377Z"
        stroke="#121212"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <path
        d="M19.8811 15.4503C19.8811 15.9509 19.464 16.368 18.9635 16.368C18.463 16.368 18.0459 15.9509 18.0459 15.4503C18.0459 14.9498 18.463 14.5327 18.9635 14.5327C19.464 14.5327 19.8811 14.9498 19.8811 15.4503Z"
        stroke="#121212"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <path
        d="M21.0488 14.2823C20.5483 14.2823 20.1312 13.8652 20.1312 13.3647C20.1312 12.8642 20.5483 12.4471 21.0488 12.4471C21.5493 12.4471 21.9664 12.8642 21.9664 13.3647C21.9664 13.8652 21.5493 14.2823 21.0488 14.2823Z"
        stroke="#121212"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <path
        d="M16.8362 14.2824C16.3357 14.2824 15.9186 13.8653 15.9186 13.3648C15.9186 12.8643 16.3357 12.4472 16.8362 12.4472C17.3367 12.4472 17.7538 12.8643 17.7538 13.3648C17.7955 13.8653 17.3784 14.2824 16.8362 14.2824Z"
        stroke="#121212"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <path
        d="M11.4556 12.6558C11.4556 14.1157 10.2877 15.2836 8.82789 15.2836C7.36805 15.2836 6.20018 14.1157 6.20018 12.6558C6.20018 11.196 7.36805 10.0281 8.82789 10.0281C10.2877 10.0698 11.4556 11.2377 11.4556 12.6558Z"
        stroke="#121212"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Gaming;
