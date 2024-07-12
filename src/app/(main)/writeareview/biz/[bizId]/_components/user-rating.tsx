'use client';

import React from 'react';
import {css} from '@styled/css';

import Rating from '@/app/(main)/biz/[bizId]/_components/rating';
import {useUpdateSearchParam} from '@/hooks';

interface Props {
  rating: number;
}

function UserRating({rating}: Props) {
  const updateSearchParam = useUpdateSearchParam();

  const handleSetRating = (_rating: string) => {
    updateSearchParam('rating', _rating);
  };

  return (
    <div className={css({display: 'flex', alignItems: 'center'})}>
      <div className={css({display: 'flex'})}>
        <Rating
          rating={+(rating ?? '0')}
          readonly={false}
          callback={_rating => handleSetRating(_rating)}
        />
      </div>
    </div>
  );
}

export default UserRating;
