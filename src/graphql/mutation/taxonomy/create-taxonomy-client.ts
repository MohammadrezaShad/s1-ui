'use client';

import {getCookie} from 'cookies-next';

import {CookieName} from '@/constants';
import {CreateTaxonomyInput, TaxonomyMutation} from '@/graphql/generated/types';
import {gqlFetch} from '@/services/fetch';

export async function createTaxonomy(
  input: CreateTaxonomyInput,
  token: string,
): Promise<TaxonomyMutation['createTaxonomy']> {
  const clientId = getCookie(CookieName.CLIENT_ID) as string;
  const res = await gqlFetch({
    url: process.env.NEXT_PUBLIC_API_BASE_URL as string,
    query: `mutation createTaxonomy ($input: CreateTaxonomyInput!) {
        taxonomy {
            createTaxonomy (input: $input) {
            success
            taxonomy {
                _id
                createdAt
                description
                parent
                postCount
                slug
                title
                type
                updatedAt
            }
          }
        }
    }`,
    variables: {input},
    headers: {
      'client-id': clientId,
      authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const response = await res.json();
  if (response.errors?.[0]?.message) {
    throw new Error(response.errors?.[0]?.message);
  }
  return response.data.taxonomy.createTaxonomy;
}
