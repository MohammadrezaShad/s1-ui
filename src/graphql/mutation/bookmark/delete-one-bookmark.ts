import {getCookie} from 'cookies-next';

import {CookieName} from '@/constants';
import {DeleteOneBookmarkInput, Scalars} from '@/graphql/generated/types';
import {gqlFetch} from '@/services/fetch';

export type DeleteOneBookmarkOutput = {
  __typename?: 'DeleteOneBookmarkOutput';
  success: Scalars['Boolean']['output'];
};

export async function deleteOneBookmark(
  input: DeleteOneBookmarkInput,
  token: string,
): Promise<DeleteOneBookmarkOutput> {
  const clientId = getCookie(CookieName.CLIENT_ID) as string;
  const res = await gqlFetch({
    url: process.env.NEXT_PUBLIC_API_BASE_URL as string,
    query: `mutation deleteOneBookmark($input:DeleteOneBookmarkInput!) {
        bookmark {
          deleteOneBookmark(input:$input) {
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
    throw new Error('Failed to post data');
  }
  const response = await res.json();
  if (response.errors?.[0]?.message) {
    throw new Error(response.errors?.[0]?.message);
  }
  return response.data.bookmark.deleteOneBookmark;
}
