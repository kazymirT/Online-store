import { skipToken } from '@reduxjs/toolkit/query/react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Menu from './Menu/Menu';
import UserButton from './UserButton/UserButton';
import cart from '@/assets/icons/cart.svg';
import logo from '@/assets/icons/Logo.svg';
import { RadioGroup } from '@/components/RadioGroup/RadioGroup';
import Search from '@/components/Search/Search';
import DropDown from '@/components/ui-components/Dropdown/DropDown';
import { Icon } from '@/components/ui-components/Icons';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useGetUserQuery } from '@/redux/services/user';
import { toggleShowCartNotification } from '@/redux/slices/cartNotificationSlice';
import { addFilterItem, clearFilters } from '@/redux/slices/queryParams';
import { userId } from '@/redux/slices/userSlice';

const Header = () => {
  const id = useAppSelector(userId);

  const { data: user } = useGetUserQuery(id ?? skipToken);
  const dispatch = useAppDispatch();

  const showNotification = () => {
    dispatch(toggleShowCartNotification(true));
  };
  const onClickCatalog = () => {
    dispatch(clearFilters());
  };
  const onClickBestsellers = () => {
    dispatch(
      addFilterItem({ filterName: 'categories', value: 'Саморозвиток' })
    );
  };
  return (
    <header className={styles.header}>
      <div className={styles['header_top']}>
        <Link to={'/'}>
          <img src={logo} alt="logo" width={102} height={84} />
        </Link>
        <Search />
        <div className={styles.btns}>
          <RadioGroup />
          <div className={styles.icons}>
            {user ? (
              <UserButton {...user} />
            ) : (
              <DropDown options={<Menu />} control={<Icon.Account />} />
            )}
            <img
              src={cart}
              alt="cart"
              width={24}
              height={24}
              onClick={showNotification}
            />
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              to={'/catalog?categories=self-development'}
              onClick={onClickBestsellers}
            >
              Хіти продажів
            </Link>
          </li>
          <li>
            <Link to={'/catalog'} onClick={onClickCatalog}>
              Каталог
            </Link>
          </li>
          <li>
            <Link to={'/order'}>Вигідні пропозиції</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
