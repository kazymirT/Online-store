import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import styles from '../Form.module.scss';
import Input from '@/components/ui-components/Input/Input';
import Select from '@/components/ui-components/Select/Select';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';
import { TOPICS } from '@/utils/constants';
import { FeedbackValues, feedbackSchema } from '@/utils/validateSchema';

const FeedBackForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<FeedbackValues>({
    defaultValues: {
      email: '',
      topic: undefined,
      question: '',
    },
    resolver: zodResolver(feedbackSchema),
    mode: 'onTouched',
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FeedbackValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const handleClose = () => dispatch(toggleModal(null));

  const textareaClName = classNames(styles.textarea, {
    [styles['textarea-error']]: errors.question?.message,
  });

  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>Зворотній Зв’язок</h2>
        <button
          type="button"
          className={styles.close}
          onClick={handleClose}
        ></button>
      </div>
      <p className={styles.paragraph}>
        Залиште свою електронну адресу, поставте запитання і ми зв’яжемося з
        вами якнайшвидше.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          {...register('email')}
          placeholder="Електрона пошта"
          type="email"
          errorMessage={errors.email?.message}
        />
        <Controller
          control={control}
          name="topic"
          render={({ field, fieldState }) => (
            <Select
              placeholder="Тема"
              value={field.value}
              options={Object.values(TOPICS)}
              onChange={(newValue) => field.onChange(newValue)}
              onBlur={field.onBlur}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <div className={styles['textarea-container']}>
          <textarea
            {...register('question')}
            className={textareaClName}
            placeholder="Ваше запитання"
          />
          {errors.question && (
            <p className={styles.error}>{errors.question?.message}</p>
          )}
        </div>
        <button type="submit" className={styles.submit} disabled={!isValid}>
          Відправити
        </button>
      </form>
    </section>
  );
};

export default FeedBackForm;
