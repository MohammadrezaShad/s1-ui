import React from 'react';
import {PiHandsClappingDuotone, PiHeart, PiLightbulb, PiThumbsDown} from 'react-icons/pi';
import {css} from '@styled/css';

import {ReviewEntity} from '@/graphql/generated/types';

import Rating from './rating';

interface CommentBoxProps {
  comment: ReviewEntity;
}

const CommentBox: React.FC<CommentBoxProps> = ({comment}) => {
  const user = comment.createUser;
  return (
    <div className={css({bgColor: 'white', p: '4', rounded: 'lg', w: 'full'})}>
      <div className={css({display: 'flex', alignItems: 'flex-start', gap: '2'})}>
        <img
          src='https://via.placeholder.com/48'
          alt={`${user?.displayName} avatar`}
          className={css({w: '12', h: '12', rounded: 'full'})}
        />
        <div>
          <div className={css({display: 'flex', alignItems: 'center', gap: '2'})}>
            <h2 className={css({fontWeight: 'semibold'})}>{user?.displayName}</h2>
            <span
              className={css({
                color: 'red.600',
                bgColor: 'red.100',
                fontSize: 'xs',
                lineHeight: 'xs',
                px: '2',
                py: '0.5',
                rounded: 'lg',
              })}
            >
              Elite 24
              {/* user.eliteStatus */}
            </span>
          </div>
          <p className={css({color: 'gray.500', fontSize: 'sm'})}>{user?.city}</p>
          <div
            className={css({
              display: 'flex',
              gap: '4',
              color: 'gray.500',
              fontSize: 'sm',
              lineHeight: 'sm',
            })}
          >
            <span>307 reviews</span>
            {/* user.reviews */}
            <span>249 friends</span>
            {/* user.friends */}
            <span>520 photos</span>
            {/* user.photos */}
          </div>
        </div>
      </div>
      <div className={css({mt: '4'})}>
        <div className={css({display: 'flex', alignItems: 'center', gap: '2'})}>
          <Rating rating={comment.score} width='6' height='6' />
          <p className={css({color: 'gray.500', fontSize: 'sm', lineHeight: 'sm'})}>
            {comment.createdAt}
          </p>
        </div>
        <p className={css({mt: '2'})}>{comment.content}</p>
      </div>
      <div className={css({display: 'flex', mr: '4', ml: '4', mt: '4', gap: '2.5'})}>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            mr: '1',
            ml: '1',
            color: 'gray.500',
            gap: '1',
          })}
        >
          <span className='material-icons'>
            <PiLightbulb className={css({w: '6', h: '6', color: 'grey_500'})} />
          </span>
          <span>4</span>
          {/* comment.ratings.helpful */}
        </div>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            mr: '1',
            ml: '1',
            color: 'gray.500',
            gap: '1',
          })}
        >
          <span className='material-icons'>
            <PiHandsClappingDuotone className={css({w: '6', h: '6', color: 'grey_500'})} />
          </span>
          <span>{12}</span>
          {/* comment.ratings.thanks */}
        </div>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            mr: '1',
            ml: '1',
            color: 'gray.500',
            gap: '1',
          })}
        >
          <span className='material-icons'>
            <PiHeart className={css({w: '6', h: '6', color: 'grey_500'})} />
          </span>
          <span>9</span>
          {/* comment.ratings.love */}
        </div>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            mr: '1',
            ml: '1',
            color: 'gray.500',
            gap: '1',
          })}
        >
          <span className='material-icons'>
            <PiThumbsDown className={css({w: '6', h: '6', color: 'grey_500'})} />
          </span>
          <span>2</span>
          {/* comment.ratings.ohNo */}
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
