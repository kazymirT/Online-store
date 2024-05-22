import classNames from 'classnames';
import { default as ReactSelect, DropdownIndicatorProps } from 'react-select';

import styles from './Select.module.scss';
import { type SelectProps, Option } from './Select.types';

const DropdownIndicator = (props: DropdownIndicatorProps<Option>) => {
  const clName = classNames(styles.indicator, {
    [styles['indicator_opened']]: props.selectProps.menuIsOpen,
  });
  return (
    <div className={clName}>
      <img
        src="/src/assets/icons/ArrowDown.svg"
        alt=""
        width={24}
        height={24}
      />
    </div>
  );
};

const optionClName = (focused: boolean) => {
  return classNames(styles.option, {
    [styles['option_focused']]: focused,
  });
};

const Select = ({
  value,
  options,
  onChange,
  error,
  helperText,
  ...props
}: SelectProps) => {
  const selectValue = value ? { value, label: value } : undefined;

  const selectOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  const containerClName = classNames(styles.container, {
    [styles['container-error']]: error,
  });
  return (
    <div className={styles.wrapper}>
      <ReactSelect
        isSearchable={false}
        unstyled
        value={selectValue}
        options={selectOptions}
        onChange={(newValue) => newValue && onChange(newValue.value)}
        controlShouldRenderValue
        blurInputOnSelect
        components={{ DropdownIndicator, IndicatorSeparator: null }}
        classNames={{
          container: () => containerClName,
          control: () => styles.control,
          menu: () => styles.menu,
          indicatorSeparator: () => styles.separator,
          menuList: () => styles['menu-list'],
          option: (state) => optionClName(state.isFocused),
        }}
        {...props}
      />
      {helperText && <p className={styles.message}>{helperText}</p>}
    </div>
  );
};

export default Select;