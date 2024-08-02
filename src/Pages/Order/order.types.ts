import {
  Control,
  UseFormRegisterReturn,
  FieldErrors,
  UseFormSetValue,
} from 'react-hook-form';

import { type OrderListType } from '@/utils/fake';

export type PersonalInfoFormProps = {
  register: {
    firstName: UseFormRegisterReturn<'firstName'>;
    lastName: UseFormRegisterReturn<'lastName'>;
    email: UseFormRegisterReturn<'email'>;
    phone: UseFormRegisterReturn<'phone'>;
  };
  errors: FieldErrors<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    department: string;
    pay: string;
  }>;
};

export type NovaPoshtaFormProps = {
  control: Control<
    {
      city: string;
      department: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      pay: string;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;
  setValue: UseFormSetValue<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    department: string;
    pay: string;
  }>;
};

export type OrderActionsProps = {
  register: UseFormRegisterReturn<'pay'>;
  isValid: boolean;
  isSubmitting: boolean;
};

export type OrderItemProps = {
  data: OrderListType;
};
