import { Link } from 'react-router-dom';

import styles from './Result.module.scss';
import {
  ButtonType,
  Position,
  Sizes,
  Variant,
} from '../ui-components/Button/constants';
import { ButtonLink } from '../ui-components/ButtonLink/ButtonLink';
import { Icon } from '../ui-components/Icons';
import { useAppDispatch } from '@/redux/hooks';
import { useGetBooksQuery } from '@/redux/services/books';
import { setSearch } from '@/redux/slices/queryParams';
import { SORT_OPTIONS } from '@/utils/constants';

const Result = ({
  value,
  isOpen,
  handleOnClose,
  clearValue,
}: {
  value: string;
  isOpen: boolean;
  handleOnClose: () => void;
  clearValue: () => void;
}) => {
  const dispatch = useAppDispatch();
  const { data: books } = useGetBooksQuery(
    { size: '3', search: value, sort: [SORT_OPTIONS['Дорожчі']] },
    { skip: value.length < 3 }
  );
  const onClickSearch = () => {
    dispatch(setSearch(value));
    handleOnClose();
    clearValue();
  };
  return (
    <>
      {isOpen && books?.content && (
        <div className={styles.results}>
          <div className={styles.content}>
            <p className={styles.search}>Шукати {value}</p>
            {books?.content.length ? (
              <>
                <div className={styles.offers}>
                  <h3>Пропозиції</h3>
                  <ul className={styles['offers_lists']}>
                    <li>Джон Сміт</li>
                    <li>Доді Сміт</li>
                    <li>Білий зуб</li>
                    <li>Мартін Крус Сміт</li>
                  </ul>
                </div>
                <div className={styles.books}>
                  <h3>Книги</h3>
                  <ul className={styles['books_list']}>
                    {books.content.map((book) => (
                      <Link
                        to={`/product/${book.id}`}
                        key={book.id}
                        className={styles.list}
                        onClick={onClickSearch}
                      >
                        <img
                          src={book.imageUrl}
                          alt={book.title}
                          width={43}
                          height={66}
                        />
                        <div className={styles.content}>
                          <h3>{book.title}</h3>
                          <span className={styles.price}>{book.price}</span>
                        </div>
                      </Link>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <p className={styles['no-result']}>
                За вашим запитом не знайдено жодних результатів
              </p>
            )}
          </div>
          {!!books?.content.length && (
            <ButtonLink
              buttonType={ButtonType.Button}
              icon={<Icon.Arrow />}
              iconPosition={Position.Right}
              size={Sizes.Small}
              text="Показати все"
              onClick={onClickSearch}
              url={`/catalog/?search=${value}`}
              variant={Variant.Basic}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Result;