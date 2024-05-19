'use server';

import {revalidatePath} from 'next/cache';
import {z} from 'zod';

import {FormStatus} from '@/constants';
import {signUp} from '@/graphql';
import {fromErrorToFormState, toFormState} from '@/utils';

async function register(state: any, data: FormData) {
  const createRegisterSchema = z.object({
    displayName: z.string().min(1, {message: 'This field has to be filled.'}).max(191),
    email: z
      .string()
      .min(1, {message: 'This field has to be filled.'})
      .email('This is not a valid email.'),
    password: z.string().min(8, {message: 'Password must be at least 8 characters.'}).max(191),
    // repeatPassword: z
    //   .string()
    //   .min(8, {message: 'Password must be at least 8 characters.'})
    //   .max(191),
    phone: z.string().min(10, {message: 'This field has to be at leat 10 digits.'}).max(11),
  });
  // .superRefine(({repeatPassword, password}, ctx) => {
  //   if (repeatPassword !== password) {
  //     ctx.addIssue({
  //       code: 'custom',
  //       message: 'The passwords did not match',
  //       path: ['repeatPassword'],
  //     });
  //   }
  // });
  try {
    const {displayName, password, email, phone} = createRegisterSchema.parse({
      displayName: data.get('display-name'),
      email: data.get('email'),
      password: data.get('password'),
      // repeatPassword: data.get('repeat-password'),
      phone: data.get('phone'),
    });
    const response = await signUp({displayName, email, password, phone});
    if (response.success) {
      revalidatePath('/login');
      return toFormState(FormStatus.SUCCESS, 'Account created');
    }
    return fromErrorToFormState(new Error('Signup failed'));
  } catch (error: Error | any) {
    return fromErrorToFormState(error);
  }
}

export default register;
