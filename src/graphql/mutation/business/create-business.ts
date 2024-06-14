import {getCookie} from 'cookies-next';

import {CookieName} from '@/constants';
import {BusinessMutation, CreateBusinessInput} from '@/graphql/generated/types';
import {gqlFetch} from '@/services/fetch';

export async function createBusiness(
  input: CreateBusinessInput,
  token: string,
): Promise<BusinessMutation['createBusiness']> {
  const clientId = getCookie(CookieName.CLIENT_ID) as string;
  const res = await gqlFetch({
    url: process.env.API_BASE_URL as string,
    query: `mutation CreateBusiness($input: CreateBusinessInput!) {
        business {
          createBusiness(input: $input) {
            success
            businessId
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
  return response.data.business.createBusiness;
}
