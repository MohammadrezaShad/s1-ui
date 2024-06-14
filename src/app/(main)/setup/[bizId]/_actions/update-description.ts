'use server';

import {cookies} from 'next/headers';

import {CookieName, FormStatus} from '@/constants';
import {updateBusiness} from '@/graphql';
import {fromErrorToFormState, toFormState} from '@/utils';

async function updateDescription(formState: any, data: FormData) {
  const cookie = cookies();
  const token = cookie.get(CookieName.ACCESS_TOKEN)?.value;
  if (!token) return toFormState(FormStatus.ERROR, 'Your are not logged in.');

  const id = data.get('id') as string;
  const description = data.get('description') as string;

  try {
    const response = await updateBusiness({id, description}, token);
    if (response.success) {
      return toFormState(FormStatus.SUCCESS, 'Description updated', {
        data: {id: '666b1b947019884177f9d0a1'},
      });
    }
    return fromErrorToFormState(new Error('Failed to update description'));
  } catch (error: Error | any) {
    return toFormState(FormStatus.ERROR, error.message);
  }
}

export default updateDescription;
