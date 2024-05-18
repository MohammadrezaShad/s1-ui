'use client';

import {useFormStatus} from 'react-dom';
import {css} from '@styled/css';
import {Flex} from '@styled/jsx';

import {IconEmail, IconLock} from '@/assets';
import {Button} from '@/components';

import {Form as LoginForm, Input, InputWrapper, Label, Link, TextField} from './login-view.styled';

function Form() {
  return (
    <LoginForm>
      <TextField className={css({mb: '8'})}>
        <Label htmlFor='email'>Email</Label>
        <InputWrapper>
          <IconEmail className={css({w: '6', h: '6'})} />
          <Input type='email' id='email' name='email' autoComplete='email' />
        </InputWrapper>
      </TextField>
      <TextField>
        <Label htmlFor='password'>Password</Label>
        <InputWrapper>
          <IconLock className={css({w: '6', h: '6'})} />
          <Input type='password' id='password' name='password' autoComplete='current-password' />
        </InputWrapper>
      </TextField>
      <Flex flexDir='column'>
        <Link href='/forget-password'>Forgot password?</Link>
        <Link href='/register'>Create new account</Link>
      </Flex>
      <SubmitButton />
      <GoogleSignIn />
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

const GoogleSignIn = () => (
  <Button
    type='submit'
    visual='contained'
    size='lg'
    color='primary'
    className={css({w: 'full', mt: '4'})}
  >
    <span>Sign in with Google</span>
  </Button>
);
