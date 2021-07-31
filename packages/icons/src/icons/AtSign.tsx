import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const AtSign: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M18 9.99938V14.9994C18 15.795 18.3161 16.5581 18.8787 17.1207C19.4413 17.6833 20.2044 17.9994 21 17.9994C21.7957 17.9994 22.5587 17.6833 23.1213 17.1207C23.6839 16.5581 24 15.795 24 14.9994V13.9994C23.9999 11.7424 23.2362 9.55186 21.8333 7.78391C20.4303 6.01596 18.4706 4.7746 16.2726 4.26168C14.0747 3.74875 11.7679 3.99442 9.72736 4.95875C7.68677 5.92307 6.03241 7.54933 5.03327 9.5731C4.03413 11.5969 3.74898 13.8991 4.22418 16.1055C4.69938 18.3119 5.90699 20.2926 7.65064 21.7256C9.39429 23.1587 11.5714 23.9597 13.8281 23.9985C16.0847 24.0373 18.2881 23.3116 20.08 21.9394M18 13.9994C18 16.2085 16.2092 17.9994 14 17.9994C11.7909 17.9994 10 16.2085 10 13.9994C10 11.7902 11.7909 9.99938 14 9.99938C16.2092 9.99938 18 11.7902 18 13.9994Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AtSign;
