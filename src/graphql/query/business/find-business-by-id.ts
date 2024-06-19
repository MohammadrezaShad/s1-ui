import {getCookie} from 'cookies-next';

import {CookieName} from '@/constants';
import {BusinessQuery, FindBusinessByIdInput} from '@/graphql/generated/types';
import {gqlFetch} from '@/services/fetch';

export async function findBusinessById(
  input: FindBusinessByIdInput,
): Promise<BusinessQuery['findBusinessById']> {
  const clientId = getCookie(CookieName.CLIENT_ID) as string;
  const res = await gqlFetch({
    url: process.env.API_BASE_URL as string,
    query: `query findBusinessById($input: FindBusinessByIdInput!) {
        business {
          findBusinessById(input: $input) {
            success
            result {
              _id
              name
              slug
              address
              address2
              businessScore {
                bestRating
                ratingCount
                ratingValue
                worstRating
              }
              createdAt
              description
              email
              favoriteCount
              images {
                _id
                alt
                createdAt
                filename
                height
                preview
                updatedAt
                width
              }
              isUserBookmark
              isUserFavorite
              lat
              long
              phone
              taxonomies {
                createdAt
                description
                parent
                postCount
                slug
                title
                type
                updatedAt
              }
              thumbnail {
                _id
                alt
                createdAt
                filename
                height
                preview
                updatedAt
                width
              }
              updatedAt
              user {
                _id
                displayName
                email
                isVerified
                phone
                roles
              }
              userBusinessScore
              webAddress
              workHour {
                closed
                day
                open24Hours
                timeRanges {
                  from
                  to
                }
              }
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
  return response.data.business.findBusinessById;
}
