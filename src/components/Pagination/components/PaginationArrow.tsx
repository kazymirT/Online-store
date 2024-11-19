import { FC } from 'react';

import styles from '../Pagination.module.scss';
import { PaginationArrowProps } from '../types';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';

const PaginationArrow: FC<PaginationArrowProps> = ({
  direction,
  isDisabled,
  onClick,
}) => (
  <li className={direction === 'prev' ? styles.prev : styles.next}>
    <Button
      buttonType={ButtonType.Button}
      size={Sizes.Pagination}
      variant={Variant.Pagination}
      disabled={isDisabled}
      text=""
      onClick={onClick}
      icon={<Icon.Arrow_1 width="24" height="24" />}
    />
  </li>
);

export default PaginationArrow;
