import { FC } from 'react';

import { IconProps } from '../types';

export const CartNew: FC<IconProps> = ({
  className,
  viewBox = '0 0 16 16',
  width = '16',
  height = '16',
  dataTestid,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      data-testid={dataTestid}
      className={className}
    >
      <path
        d="M9.62012 16L11.1201 17.5L14.3701 14.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.80994 2L5.18994 5.63"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1899 2L18.8099 5.63"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 7.84998C2 5.99998 2.99 5.84998 4.22 5.84998H19.78C21.01 5.84998 22 5.99998 22 7.84998C22 9.99998 21.01 9.84998 19.78 9.84998H4.22C2.99 9.84998 2 9.99998 2 7.84998Z"
        strokeWidth="1.5"
      />
      <path
        d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
