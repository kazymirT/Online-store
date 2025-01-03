import { FC } from 'react';

import { IconProps } from '../types';

export const Profile: FC<IconProps> = ({
  className,
  viewBox = '0 0 40 40',
  width = '40',
  height = '40',
  dataTestid,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      data-testid={dataTestid}
    >
      <path d="M22.5445 20.3735C24.3 19.4545 25.5 17.619 25.5 15.5C25.5 12.4625 23.0375 10 20 10C16.9625 10 14.5 12.4625 14.5 15.5C14.5 17.619 15.7 19.4545 17.4555 20.3735C13.445 21.545 10.5 25.4045 10.5 30H29.5C29.5 25.4045 26.555 21.545 22.5445 20.3735ZM15.5 15.5C15.5 13.0185 17.5185 11 20 11C22.4815 11 24.5 13.0185 24.5 15.5C24.5 17.9815 22.4815 20 20 20C17.5185 20 15.5 17.9815 15.5 15.5ZM20 21C24.3675 21 27.9765 24.5065 28.448 29H11.552C12.0235 24.5065 15.6325 21 20 21Z" />
    </svg>
  );
};
