import React from 'react';

interface IIconCheckProps {
  completed?: boolean;
}

const IconCheck: React.FC<IIconCheckProps> = ({ completed }): JSX.Element => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12.6111L8.92308 17.5L20 6.5"
        stroke={`${completed ? '#02ce13' : '#d6cdc2'}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default IconCheck;
