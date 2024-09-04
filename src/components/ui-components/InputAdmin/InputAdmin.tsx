import { InputMask } from '@react-input/mask';
import classNames from 'classnames';
import { forwardRef, useId } from 'react';

import styles from './InputAdmin.module.scss';
import { InputAdminProps } from './InputAdmin.types';

const InputAdmin = forwardRef<HTMLInputElement, InputAdminProps>(
  ({ errorMessage, placeholder, ...rest }, ref) => {
    const id = useId();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      rest.onChange && rest.onChange(event);
    };

    const inputClassName = classNames(styles.input, {
      [styles['input-error']]: errorMessage,
    });
    return (
      <div className={styles['input-box']}>
        <label htmlFor={id}>
          {placeholder}
          {placeholder === 'Номер телефону' ? (
            <InputMask
              mask="+38 (___) ___-__-__"
              showMask
              replacement={{ _: /\d/ }}
              className={inputClassName}
              ref={ref}
              type="text"
              {...rest}
            />
          ) : (
            <input
              {...rest}
              id={id}
              ref={ref}
              onChange={onChange}
              className={inputClassName}
            />
          )}
        </label>
        {!!errorMessage && <span className={styles.error}>{errorMessage}</span>}
      </div>
    );
  }
);

export default InputAdmin;
