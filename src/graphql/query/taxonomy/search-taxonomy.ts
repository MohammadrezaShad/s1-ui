import {getCookie} from 'cookies-next';

import {CookieName} from '@/constants';
import {SearchTaxonomyInput, TaxonomyQuery} from '@/graphql/generated/types';
import {gqlFetch} from '@/services/fetch';

export async function searchTaxonomy(
  input: SearchTaxonomyInput,
): Promise<TaxonomyQuery['searchTaxonomy']> {
  const clientId = getCookie(CookieName.CLIENT_ID) as string;
  const res = await gqlFetch({
    url: process.env.API_BASE_URL as string,
    query: `query searchTaxonomy($input: SearchTaxonomyInput!) {
        taxonomy {
            searchTaxonomy (input: $input) {
            success
            totalCount
            totalPages
            results {
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
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const response = await res.json();
  if (response.errors?.[0]?.message) {
    throw new Error(response.errors?.[0]?.message);
  }
  return response.data.taxonomy.searchTaxonomy;
}
