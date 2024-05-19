import {getCookie} from 'cookies-next';

import {CookieName} from '@/constants';
import {AuthQuery, SigninInput} from '@/graphql/generated/types';
import {gqlFetch} from '@/services/fetch';

export async function signIn(input: SigninInput): Promise<AuthQuery['signin']> {
  const clientId = getCookie(CookieName.CLIENT_ID) as string;
  const res = await gqlFetch({
    url: process.env.API_BASE_URL as string,
    query: `query Signin($input: SigninInput!) {
        auth {
          signin(input: $input) {
            accessToken
            refreshToken
            success
          }
        }
      }`,
    variables: {input},
    headers: {
      'client-id': clientId,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const response = await res.json();
  if (response.errors?.[0]?.message) {
    throw new Error(response.errors?.[0]?.message);
  }
  return response.data.auth.signin;
}
