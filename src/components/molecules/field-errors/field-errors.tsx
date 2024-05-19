import {css} from '@styled/css';

import {FormState} from '@/utils';

type FieldErrorProps = {
  formState: FormState;
  name: string;
};

const FieldError = ({formState, name}: FieldErrorProps) => (
  <span
    className={css({
      color: 'red.500',
      fontSize: 'sm',
    })}
  >
    {formState.fieldErrors[name]?.[0]}
  </span>
);

export {FieldError};
