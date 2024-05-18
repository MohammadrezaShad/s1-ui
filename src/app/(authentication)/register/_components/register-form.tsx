'use client';

import {useFormStatus} from 'react-dom';
import {css} from '@styled/css';
import {Flex} from '@styled/jsx';
import {useRouter} from 'next/navigation';

import {IconEmail, IconLock, IconUser} from '@/assets';
import {Button} from '@/components';

import {
  Form as LoginForm,
  Input,
  InputWrapper,
  Label,
  Link,
  TextField,
} from './register-view.styled';

function Form() {
  return (
    <LoginForm>
      <TextField className={css({mb: '2'})}>
        <Label htmlFor='name'>Full name:</Label>
        <InputWrapper>
          <IconUser className={css({w: '6', h: '6'})} />
          <Input type='text' id='full-name' name='full-name' autoComplete='name' />
        </InputWrapper>
      </TextField>
      <TextField className={css({mb: '2'})}>
        <Label htmlFor='email'>Email</Label>
        <InputWrapper>
          <IconEmail className={css({w: '6', h: '6'})} />
          <Input type='email' id='email' name='email' autoComplete='email' />
        </InputWrapper>
      </TextField>
      <TextField className={css({mb: '2'})}>
        <Label htmlFor='password'>Password</Label>
        <InputWrapper>
          <IconLock className={css({w: '6', h: '6'})} />
          <Input type='password' id='password' name='password' autoComplete='current-password' />
        </InputWrapper>
      </TextField>
      <TextField>
        <Label htmlFor='repeat-password'>Repeat Password:</Label>
        <InputWrapper>
          <IconLock className={css({w: '6', h: '6'})} />
          <Input type='password' id='repeat-password' name='repeat-password' />
        </InputWrapper>
      </TextField>
      <Flex flexDir='column'>
        <Link href='/login'>Already have an account? Sign in</Link>
      </Flex>
      <SubmitButton />
    </LoginForm>
  );
}

export default Form;

const SubmitButton = () => {
  const {pending} = useFormStatus();
  const buttonText = pending ? 'Please wait...' : 'Continue';
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push('/register/code')}
      type='button'
      visual='contained'
      size='lg'
      color='primary'
      className={css({w: 'full', mt: '12'})}
    >
      <span>{buttonText}</span>
    </Button>
  );
};
