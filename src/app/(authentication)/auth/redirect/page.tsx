'use client';

import {redirect, useSearchParams} from 'next/navigation';

import {setTokens} from '@/helpers';

export default function Page() {
  const searchParams = useSearchParams();
  const accessToken = searchParams.get('accessToken') as string;
  const refreshToken = searchParams.get('refreshToken') as string;
  setTokens({accessToken, refreshToken});

  redirect('/');
}
