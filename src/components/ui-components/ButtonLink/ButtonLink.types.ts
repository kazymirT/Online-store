import { type ButtonProps } from '../Button/Button.types';

export interface ButtonLinkProps extends Omit<ButtonProps, 'onClick'> {
  url: string;
}