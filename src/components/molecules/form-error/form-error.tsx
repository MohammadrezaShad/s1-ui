import {css} from '@styled/css';

import {FormState} from '@/utils';

type FormErrorProps = {
  formState: FormState;
};

const FormError = ({formState}: FormErrorProps) => (
  <div
    className={css({
      color: 'red.500',
      fontSize: 'sm',
      textAlign: 'center',
    })}
  >
    {formState.message}
  </div>
);

export {FormError};
