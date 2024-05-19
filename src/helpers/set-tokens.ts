'use server';

import {cookies} from 'next/headers';

import {CookieName} from '@/constants';

export const setTokens = ({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) => {
  const expirationTime = 14 * 24 * 60 * 60 * 1000;
  const expirationDate = new Date(Date.now() + expirationTime);

  cookies().set(CookieName.ACCESS_TOKEN, accessToken, {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    expires: expirationDate,
  });
  cookies().set(CookieName.REFRESH_TOKEN, refreshToken, {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    expires: expirationDate,
  });
};
