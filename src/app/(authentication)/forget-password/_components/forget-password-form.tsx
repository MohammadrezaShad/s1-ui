'use client';

import {useFormStatus} from 'react-dom';
import {css} from '@styled/css';
import {Flex} from '@styled/jsx';
import {useRouter} from 'next/navigation';

import {IconEmail} from '@/assets';
import {Button} from '@/components';

import {
  Form as FormView,
  Input,
  InputWrapper,
  Label,
  Subtitle,
  TextField,
} from './forget-password-view.styled';

function Form() {
  return (
    <FormView>
      <Subtitle>Please insert your email to start password recovery</Subtitle>
      <TextField>
        <Label htmlFor='email'>Email</Label>
        <InputWrapper>
          <IconEmail className={css({w: '6', h: '6'})} />
          <Input dir='ltr' type='email' id='email' name='email' autoComplete='email' required />
        </InputWrapper>
      </TextField>
      <Flex w='full' columnGap='4'>
        <SubmitButton />
        <CancelButton />
      </Flex>
    </FormView>
  );
}

export default Form;

const SubmitButton = () => {
  const {pending} = useFormStatus();
  const buttonText = pending ? 'Please wait...' : 'Continue';
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push('/forget-password/code')}
      type='button'
      visual='contained'
      size='lg'
      color='primary'
      className={css({w: 'full', mt: '[105px]'})}
    >
      <span>{buttonText}</span>
    </Button>
  );
};

const CancelButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push('/login')}
      type='button'
      visual='outlined'
      size='lg'
      color='primary'
      className={css({w: 'full', mt: '[105px]'})}
    >
      Cancel
    </Button>
  );
};
