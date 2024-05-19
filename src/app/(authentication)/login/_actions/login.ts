'use server';

import {revalidatePath} from 'next/cache';
import {z} from 'zod';

import {FormStatus} from '@/constants';
import {signIn} from '@/graphql';
import {setTokens} from '@/helpers';
import {fromErrorToFormState, toFormState} from '@/utils';

async function login(state: any, data: FormData) {
  const createRegisterSchema = z.object({
    email: z
      .string()
      .min(1, {message: 'This field has to be filled.'})
      .email('This is not a valid email.'),
    password: z.string().min(8, {message: 'Password must be at least 8 characters.'}).max(191),
  });
  try {
    const {password, email} = createRegisterSchema.parse({
      displayName: data.get('display-name'),
      email: data.get('email'),
      password: data.get('password'),
      phone: data.get('phone'),
    });
    const response = await signIn({email, password});
    if (response.success) {
      const accessToken = response.accessToken as string;
      const refreshToken = response.refreshToken as string;
      setTokens({accessToken, refreshToken});
      revalidatePath('/');
      return toFormState(FormStatus.SUCCESS, 'Login successfull');
    }
    return toFormState(FormStatus.ERROR, 'Signup failed');
  } catch (error: Error | any) {
    return fromErrorToFormState(error);
  }
}

export default login;
