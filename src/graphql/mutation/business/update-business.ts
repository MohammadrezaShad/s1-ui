import {getCookie} from 'cookies-next';

import {CookieName} from '@/constants';
import {BusinessMutation, UpdateBusinessInput} from '@/graphql/generated/types';
import {gqlFetch} from '@/services/fetch';

export async function updateBusiness(
  input: UpdateBusinessInput,
  token: string,
): Promise<BusinessMutation['updateBusiness']> {
  const clientId = getCookie(CookieName.CLIENT_ID) as string;
  const res = await gqlFetch({
    url: process.env.API_BASE_URL as string,
    query: `mutation UpdateBusiness($input: UpdateBusinessInput!) {
        business {
          updateBusiness(input: $input) {
            success
          }
        }
      }`,
    variables: {input},
    headers: {
      authorization: `Bearer ${token}`,
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
  return response.data.business.updateBusiness;
}
