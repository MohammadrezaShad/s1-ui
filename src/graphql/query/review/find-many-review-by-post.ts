import {getCookie} from 'cookies-next';

import {CookieName} from '@/constants';
import {FindManyReviewByPostInput, ReviewQuery} from '@/graphql/generated/types';
import {gqlFetch} from '@/services/fetch';

export async function findReviewByPost(
  input: FindManyReviewByPostInput,
): Promise<ReviewQuery['findReviewByPost']> {
  const clientId = getCookie(CookieName.CLIENT_ID) as string;
  const res = await gqlFetch({
    url: process.env.API_BASE_URL as string,
    query: `query findReviewByPost($input: FindManyReviewByPostInput!) {
        review {
          findReviewByPost(input: $input) {
            success
            results {
              _id
              approved
              author
              authorEmail
              childs {
                _id
                content
                createdAt
                createUser {
                  _id
                  city
                  displayName
                  email
                }
                author
                approved
                score
                type
              }
              content
              createUser {
                  _id
                  city
                  displayName
                  email
              }
              createdAt
              parent {
                _id
              }
              post {
                businessEntity {
                  _id
                }
              }
              score
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
  return response.data.review.findReviewByPost;
}
