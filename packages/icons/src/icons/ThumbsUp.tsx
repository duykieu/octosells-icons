import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ThumbsUp: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M9 24H6C5.46957 24 4.96086 23.7893 4.58579 23.4142C4.21071 23.0391 4 22.5304 4 22V15C4 14.4696 4.21071 13.9609 4.58579 13.5858C4.96086 13.2107 5.46957 13 6 13H9M16 11V7C16 6.20435 15.6839 5.44129 15.1213 4.87868C14.5587 4.31607 13.7956 4 13 4L9 13V24H20.28C20.7623 24.0055 21.2304 23.8364 21.5979 23.524C21.9654 23.2116 22.2077 22.7769 22.28 22.3L23.66 13.3C23.7035 13.0134 23.6842 12.7207 23.6033 12.4423C23.5225 12.1638 23.3821 11.9063 23.1919 11.6875C23.0016 11.4687 22.7661 11.2939 22.5016 11.1752C22.2371 11.0565 21.9499 10.9967 21.66 11H16Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ThumbsUp;
