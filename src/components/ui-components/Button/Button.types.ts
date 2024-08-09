import { ReactNode } from 'react';

import { ButtonType, Position, Sizes, Variant } from './constants';

export interface ButtonProps {
  variant: Variant;
  size: Sizes;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  buttonType: ButtonType;
  children?: ReactNode;
  iconPosition?: Position;
}