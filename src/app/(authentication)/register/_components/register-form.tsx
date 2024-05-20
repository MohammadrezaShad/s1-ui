'use client';

import {useEffect} from 'react';
import {useFormState, useFormStatus} from 'react-dom';
import {css} from '@styled/css';
import {Flex} from '@styled/jsx';
import {useRouter} from 'next/navigation';

import {IconEmail, IconLock, IconUser} from '@/assets';
import {Button, FieldError} from '@/components';
import {FormStatus} from '@/constants';
import {EMPTY_FORM_STATE} from '@/utils';

import GoogleButton from '../../_components/google-button';
import register from '../_actions/register';
import {
  Form as LoginForm,
  Input,
  InputWrapper,
  Label,
  Link,
  TextField,
} from './register-view.styled';

function Form() {
  const [formState, action] = useFormState(register, EMPTY_FORM_STATE);
  const router = useRouter();
  const googleLogin = () => {
    window.location.href = process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL as string;
  };

  useEffect(() => {
    if (formState?.status === FormStatus.SUCCESS) {
      router.push('/login');
    }
  }, [formState, router]);

  return (
    <LoginForm action={action}>
      <TextField className={css({mb: '2'})}>
        <Label htmlFor='name'>Display Name:</Label>
        <InputWrapper>
          <IconUser className={css({w: '6', h: '6'})} />
          <Input type='text' id='display-name' name='display-name' autoComplete='name' />
        </InputWrapper>
        <FieldError formState={formState} name='displayName' />
      </TextField>
      <TextField className={css({mb: '2'})}>
        <Label htmlFor='email'>Email</Label>
        <InputWrapper>
          <IconEmail className={css({w: '6', h: '6'})} />
          <Input type='email' id='email' name='email' autoComplete='email' />
        </InputWrapper>
        <FieldError formState={formState} name='email' />
      </TextField>
      <TextField className={css({mb: '2'})}>
        <Label htmlFor='name'>Phone number:</Label>
        <InputWrapper>
          <IconUser className={css({w: '6', h: '6'})} />
          <Input type='tel' id='phone' name='phone' autoComplete='mobile tel' />
        </InputWrapper>
        <FieldError formState={formState} name='phone' />
      </TextField>
      <TextField className={css({mb: '2'})}>
        <Label htmlFor='password'>Password</Label>
        <InputWrapper>
          <IconLock className={css({w: '6', h: '6'})} />
          <Input type='password' id='password' name='password' autoComplete='current-password' />
        </InputWrapper>
        <FieldError formState={formState} name='password' />
      </TextField>
      <Flex flexDir='column'>
        <Link href='/login'>Already have an account? Sign in</Link>
      </Flex>
      <SubmitButton />
      <GoogleButton onClick={googleLogin} />
    </LoginForm>
  );
}

export default Form;

const SubmitButton = () => {
  const {pending} = useFormStatus();
  const buttonText = pending ? 'Please wait...' : 'Continue';

  return (
    <Button
      type='submit'
      visual='contained'
      size='lg'
      color='primary'
      className={css({w: 'full', mt: '2'})}
    >
      <span>{buttonText}</span>
    </Button>
  );
};
