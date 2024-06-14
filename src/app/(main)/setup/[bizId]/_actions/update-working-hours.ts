'use server';

import {cookies} from 'next/headers';

import {CookieName, FormStatus} from '@/constants';
import {updateBusiness} from '@/graphql';
import {WorkHourType} from '@/graphql/generated/types';
import {fromErrorToFormState, toFormState} from '@/utils';

async function updateWorkingHours(formState: any, data: FormData) {
  const cookie = cookies();
  const token = cookie.get(CookieName.ACCESS_TOKEN)?.value;
  if (!token) return toFormState(FormStatus.ERROR, 'Your are not logged in.');

  const id = data.get('id') as string;
  const dailyWorkTime = data.get('daily-work-time') as string;
  const workHour = JSON.parse(dailyWorkTime) as WorkHourType[];

  try {
    const response = await updateBusiness({id, workHour}, token);
    if (response.success) {
      return toFormState(FormStatus.SUCCESS, 'Working hours updated');
    }
    return fromErrorToFormState(new Error('Failed to update working hours'));
  } catch (error: Error | any) {
    return toFormState(FormStatus.ERROR, error.message);
  }
}

export default updateWorkingHours;
