/* eslint-disable import/no-extraneous-dependencies */

'use client';

import {useEffect} from 'react';
import {useFormState, useFormStatus} from 'react-dom';
import {css} from '@styled/css';
import {Flex} from '@styled/jsx';
import {useRouter} from 'next/navigation';

import {IconEmail, IconLock} from '@/assets';
import {Button, FieldError, FormError} from '@/components';
import {FormStatus} from '@/constants';
import {EMPTY_FORM_STATE} from '@/utils';

import login from '../_actions/login';
import {Form as LoginForm, Input, InputWrapper, Label, Link, TextField} from './login-view.styled';

function Form() {
  const [formState, action] = useFormState(login, EMPTY_FORM_STATE);
  const router = useRouter();
  const googleLogin = () => {
    window.location.href = process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL as string;
  };

  useEffect(() => {
    if (formState?.status === FormStatus.SUCCESS) {
      router.push('/');
    }
  }, [formState, router]);

  return (
    <LoginForm action={action}>
      <FormError formState={formState} />
      <TextField className={css({mb: '8'})}>
        <Label htmlFor='email'>Email</Label>
        <InputWrapper>
          <IconEmail className={css({w: '6', h: '6'})} />
          <Input type='email' id='email' name='email' autoComplete='email' />
        </InputWrapper>
        <FieldError formState={formState} name='email' />
      </TextField>
      <TextField>
        <Label htmlFor='password'>Password</Label>
        <InputWrapper>
          <IconLock className={css({w: '6', h: '6'})} />
          <Input type='password' id='password' name='password' autoComplete='current-password' />
        </InputWrapper>
        <FieldError formState={formState} name='password' />
      </TextField>
      <Flex flexDir='column'>
        <Link href='/forget-password'>Forgot password?</Link>
        <Link href='/register'>Create new account</Link>
      </Flex>
      <SubmitButton />
      <Button
        type='button'
        visual='contained'
        size='lg'
        color='primary'
        className={css({w: 'full', mt: '4'})}
        onClick={() => googleLogin()}
      >
        <span>Sign in with Google</span>
      </Button>
    </LoginForm>
  );
}

export default Form;

const SubmitButton = () => {
  const {pending} = useFormStatus();
  const buttonText = pending ? 'Logging in...' : 'Log in';

  return (
    <Button
      type='submit'
      visual='contained'
      size='lg'
      color='primary'
      className={css({w: 'full', mt: '[94px]'})}
    >
      <span>{buttonText}</span>
    </Button>
  );
};
