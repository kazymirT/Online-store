import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import styles from './Search.module.scss';
import search from '@/assets/icons/search.svg';
import bookshelf from '@/assets/images/bookshelf.png';
import Input from '@/components/ui-components/Input/Input';
import { SearchValues, searchSchema } from '@/utils/validateSchema';

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchValues>({
    defaultValues: {
      search: '',
    },
    resolver: zodResolver(searchSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: SearchValues) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <section className={styles.search}>
      <div className="container">
        <div className={styles.content}>
          <h1>Досліджуй безмежні сторінки</h1>
          <p>
            Знайди свою наступну пригоду <br />в нашій книжковій
            інтернет-крамниці!
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('search')}
              placeholder="Пошук"
              type="text"
              errorMessage={errors.search?.message}
            />
            <button type="submit">
              <img src={search} width={24} height={24} alt="search icon" />
            </button>
          </form>
          <img
            className={styles.images}
            src={bookshelf}
            width={530}
            height={487}
            alt="Bookshelf"
          />
        </div>
      </div>
    </section>
  );
};

export default Search;