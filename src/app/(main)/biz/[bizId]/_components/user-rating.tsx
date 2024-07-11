'use client';

import React from 'react';
import {css} from '@styled/css';
import {useRouter} from 'next/navigation';

import {BusinessEntity} from '@/graphql/generated/types';

import Rating from './rating';
import {ReviewLink, VisitorRatingWrapper, VisitorReviewWrapper} from './styled';

interface Props {
  business: BusinessEntity;
}

function UserRating({business}: Props) {
  const router = useRouter();

  const redirectToReview = (rating: string) => {
    router.push(
      `/writeareview/biz/${business._id}?returnUrl=%2Fbiz%2F${business._id}&rating=${rating}`,
    );
  };
  return (
    <VisitorReviewWrapper>
      <VisitorRatingWrapper>
        <Rating rating={0} readonly={false} callback={redirectToReview} />{' '}
        <span className={css({fontSize: 'sm'})}>Select your rating</span>
      </VisitorRatingWrapper>
      <ReviewLink href={`/writeareview/biz/${business._id}?returnUrl=%2Fbiz%2F${business._id}`}>
        Start your review of <span>{business.name}</span>
      </ReviewLink>
    </VisitorReviewWrapper>
  );
}

export default UserRating;
