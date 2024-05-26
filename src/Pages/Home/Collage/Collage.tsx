import styles from './Collage.module.scss';
import collageBook from '@/assets/images/collage.png';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const Collage = () => {
  const dispatch = useAppDispatch();
  const handleOnClick = () =>
    dispatch(toggleModal({ openedModalType: 'create-account' }));

  return (
    <section className={styles.collage}>
      <div className={styles['img-box']}>
        <img src={collageBook} alt="collage books" />
      </div>
      <div className={styles.content}>
        <h2>Найбільний книжковий магазин у вашому регіоні</h2>
        <p>
          Приєднуйтесь до нашої спільноти книголюбів: Створіть свій обліковий
          запис і пориньте в нескінченну насолоду від читання!
        </p>
        <button type="button" onClick={handleOnClick}>
          Створити акаунт
        </button>
      </div>
    </section>
  );
};

export default Collage;