import { skipToken } from '@reduxjs/toolkit/query/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Menu from './Menu/Menu';
import UserButton from './UserButton/UserButton';
import logo from '@/assets/icons/Logo.svg';
import { RadioGroup } from '@/components/RadioGroup/RadioGroup';
import Search from '@/components/Search/Search';
import DropDown from '@/components/ui-components/Dropdown/DropDown';
import { Icon } from '@/components/ui-components/Icons';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useGetUserQuery } from '@/redux/services/user';
import { addFilterItem, clearFilters } from '@/redux/slices/queryParams';
import { toggleOpenCart, goods } from '@/redux/slices/shoppingCartSlice';
import { userId } from '@/redux/slices/userSlice';

const Header = () => {
  const id = useAppSelector(userId);
  const { t } = useTranslation();
  const { data: user } = useGetUserQuery(id ?? skipToken);
  const dispatch = useAppDispatch();

  const openCart = () => dispatch(toggleOpenCart(true));

  const cartItems = useAppSelector(goods);

  const cartItemsCount = React.useMemo(
    () => cartItems.reduce((acc, item) => (acc += item.quantity), 0),
    [cartItems]
  );

  const onClickCatalog = () => {
    dispatch(clearFilters());
  };
  const onClickBestsellers = () => {
    dispatch(
      addFilterItem({
        filterName: 'categories',
        attributes: { id: 1, name: '' },
      })
    );
  };
  return (
    <header className={styles.header}>
      <div className={styles['header_top']}>
        <Link to={'/'}>
          <img src={logo} alt="logo" width={102} height={84} />
        </Link>
        <div className={styles['row-1']}>
          <Search />
          <div className={styles.btns}>
            <RadioGroup />
            <div className={styles.icons}>
              {user && id ? (
                <UserButton {...user} />
              ) : (
                <DropDown
                  options={<Menu />}
                  control={<Icon.Account />}
                  variant="menu"
                />
              )}
              <button
                className={styles['cart-btn']}
                onClick={openCart}
                aria-label="Open cart"
              >
                <Icon.Cart />
                {cartItemsCount > 0 && (
                  <div className={styles['cart-counter']}>
                    <span>{cartItemsCount}</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={'/catalog?categories=1'} onClick={onClickBestsellers}>
              {t('header.links.children')}
            </Link>
          </li>
          <li>
            <Link to={'/catalog'} onClick={onClickCatalog}>
              {t('header.links.catalog')}
            </Link>
          </li>
          <li>
            <Link to={'/admin'}>{t('header.links.admin')}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
