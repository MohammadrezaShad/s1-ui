'use client';

import {useState} from 'react';
import toast from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import {css} from '@styled/css';
import {Flex} from '@styled/jsx';
import {useRouter} from 'next/navigation';
import {z, ZodError} from 'zod';

import {IconEmail, IconLock, IconUser} from '@/assets';
import {Button} from '@/components';
import {signUp} from '@/graphql';

import 'react-phone-input-2/lib/style.css';

import GoogleButton from '../../_components/google-button';
import {
  Form as LoginForm,
  Input,
  InputWrapper,
  Label,
  Link,
  TextField,
} from './register-view.styled';

function Form() {
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<any>();
  const [phone, setPhone] = useState<string>();
  const router = useRouter();
  const googleLogin = () => {
    window.location.href = process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL as string;
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createRegisterSchema = z.object({
      displayName: z
        .string()
        .min(3, {message: 'This field has to be at least 3 characters.'})
        .max(191),
      email: z
        .string()
        .min(6, {message: 'This field has to be filled.'})
        .email('This is not a valid email.'),
      password: z.string().min(8, {message: 'Password must be at least 8 characters.'}).max(191),
      phone: z.string().min(10, {message: 'This field has to be at leat 10 digits.'}).max(15),
    });

    const displayNameRef = document.querySelector('#display-name')! as HTMLInputElement;
    const emailRef = document.querySelector('#email')! as HTMLInputElement;
    const passwordRef = document.querySelector('#password')! as HTMLInputElement;

    try {
      const {displayName, password, email} = createRegisterSchema.parse({
        displayName: displayNameRef.value,
        email: emailRef.value,
        password: passwordRef.value,
        phone,
      });
      setPending(true);
      const response = await signUp({displayName, email, password, phone});
      if (response.success) {
        toast.success('Account successfully created');
        setTimeout(() => {
          router.push('/login');
        }, 1000);
      }
    } catch (error: any) {
      let fieldErrors;
      if (error instanceof ZodError) {
        setErrors(error.flatten().fieldErrors);
      } else {
        fieldErrors = error.message;
        toast.error(fieldErrors);
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <LoginForm onSubmit={handleSignUp}>
      <TextField className={css({mb: '2'})}>
        <Label htmlFor='name'>Display Name:</Label>
        <InputWrapper>
          <IconUser className={css({w: '6', h: '6'})} />
          <Input type='text' id='display-name' name='display-name' autoComplete='name' required />
        </InputWrapper>
        {errors?.displayName && (
          <span
            className={css({
              color: 'red.500',
              fontSize: 'sm',
            })}
          >
            {errors.displayName?.[0]}
          </span>
        )}
      </TextField>
      <TextField className={css({mb: '2'})}>
        <Label htmlFor='email'>Email</Label>
        <InputWrapper>
          <IconEmail className={css({w: '6', h: '6'})} />
          <Input type='email' id='email' name='email' autoComplete='email' required />
        </InputWrapper>
        {errors?.email && (
          <span
            className={css({
              color: 'red.500',
              fontSize: 'sm',
            })}
          >
            {errors.email?.[0]}
          </span>
        )}
      </TextField>
      <TextField className={css({mb: '2'})}>
        <Label htmlFor='name'>Phone number:</Label>
        <InputWrapper>
          <IconUser className={css({w: '6', h: '6'})} />
          <PhoneInput
            containerClass='border-0'
            inputClass='border-0'
            onChange={_phone => setPhone(_phone)}
          />
        </InputWrapper>
        {errors?.phone && (
          <span
            className={css({
              color: 'red.500',
              fontSize: 'sm',
            })}
          >
            {errors.phone?.[0]}
          </span>
        )}
      </TextField>
      <TextField className={css({mb: '2'})}>
        <Label htmlFor='password'>Password</Label>
        <InputWrapper>
          <IconLock className={css({w: '6', h: '6'})} />
          <Input
            type='password'
            id='password'
            name='password'
            autoComplete='current-password'
            required
          />
        </InputWrapper>
        {errors?.password && (
          <span
            className={css({
              color: 'red.500',
              fontSize: 'sm',
            })}
          >
            {errors.password?.[0]}
          </span>
        )}
      </TextField>
      <Flex flexDir='column'>
        <Link href='/login'>Already have an account? Sign in</Link>
      </Flex>
      <SubmitButton pending={pending} />
      <GoogleButton onClick={googleLogin} />
    </LoginForm>
  );
}

export default Form;

const SubmitButton = ({pending}: {pending: boolean}) => {
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
