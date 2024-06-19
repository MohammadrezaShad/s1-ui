import {getCookie} from 'cookies-next';

import {CookieName} from '@/constants';
import {AuthQuery} from '@/graphql/generated/types';
import {gqlFetch} from '@/services/fetch';

export async function getProfile(token: string): Promise<AuthQuery['getProfile']> {
  const clientId = getCookie(CookieName.CLIENT_ID) as string;
  const res = await gqlFetch({
    url: process.env.API_BASE_URL as string,
    query: `query getProfile {
            auth {
                getProfile {
                success
                result {
                    _id
                    bookmarks {
                    _id
                    createdAt
                    post {
                        businessEntity {
                        _id
                        name
                        slug
                        thumbnail {
                            _id
                            filename
                            height
                        width
                        }
                        }
                    }
                    type
                    user {
                        _id
                        displayName
                    }
                    }
                    displayName
                    email
                    favorites {
                    _id
                    createdAt
                    post {
                        businessEntity {
                        _id
                        name
                        slug
                        thumbnail {
                            _id
                            filename
                            height
                        width
                        }
                        }
                    }
                    type
                    user {
                        _id
                        displayName
                    }
                    }
                    isVerified
                    permissions {
                    _id
                    name
                    title
                    }
                    phone
                    roles {
                    _id
                    name
                    permissions {
                        _id
                        name
                        title
                    }
                    title
                    }
                    updatedAt
                }
                }
            }
        }`,
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
  return response.data.auth.getProfile;
}
