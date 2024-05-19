import {ZodError} from 'zod';

import {FormStatus} from '@/constants';

export type FormState = {
  status: FormStatus;
  message: string;
  fieldErrors: Record<string, string[] | undefined>;
  timestamp: number;
};

export const EMPTY_FORM_STATE: FormState = {
  status: FormStatus.UNSET as const,
  message: '',
  fieldErrors: {},
  timestamp: Date.now(),
};

export const fromErrorToFormState = (error: unknown) => {
  if (error instanceof ZodError) {
    return {
      status: FormStatus.ERROR as const,
      message: '',
      fieldErrors: error.flatten().fieldErrors,
      timestamp: Date.now(),
    };
  }
  if (error instanceof Error) {
    return {
      status: FormStatus.ERROR as const,
      message: error.message,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  }
  return {
    status: FormStatus.ERROR as const,
    message: 'An unknown error occurred',
    fieldErrors: {},
    timestamp: Date.now(),
  };
};

export const toFormState = (status: FormState['status'], message: string): FormState => ({
  status,
  message,
  fieldErrors: {},
  timestamp: Date.now(),
});
