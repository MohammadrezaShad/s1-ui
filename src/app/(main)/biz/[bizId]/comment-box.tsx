import React from 'react';
import {PiHandsClappingDuotone, PiHeart, PiLightbulb, PiThumbsDown} from 'react-icons/pi';
import {css} from '@styled/css';

import Rating from './rating';

interface CommentBoxProps {
  user: {
    name: string;
    location: string;
    eliteStatus: string;
    reviews: number;
    friends: number;
    photos: number;
    avatarUrl: string;
  };
  comment: {
    date: string;
    content: string;
    ratings: {
      helpful: number;
      thanks: number;
      love: number;
      ohNo: number;
    };
  };
}

const CommentBox: React.FC<CommentBoxProps> = ({user, comment}) => (
  <div className={css({bgColor: 'white', p: '4', rounded: 'lg', w: 'full'})}>
    <div className={css({display: 'flex', alignItems: 'flex-start', gap: '2'})}>
      <img
        src={user.avatarUrl}
        alt={`${user.name} avatar`}
        className={css({w: '12', h: '12', rounded: 'full'})}
      />
      <div>
        <div className={css({display: 'flex', alignItems: 'center', gap: '2'})}>
          <h2 className={css({fontWeight: 'semibold'})}>{user.name}</h2>
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
            {user.eliteStatus}
          </span>
        </div>
        <p className={css({color: 'gray.500', fontSize: 'sm'})}>{user.location}</p>
        <div
          className={css({display: 'flex', color: 'gray.500', fontSize: 'sm', lineHeight: 'sm'})}
        >
          <span>{user.reviews} reviews</span>
          <span>{user.friends} friends</span>
          <span>{user.photos} photos</span>
        </div>
      </div>
    </div>
    <div className={css({mt: '4'})}>
      <div className={css({display: 'flex', alignItems: 'center', gap: '2'})}>
        <Rating rating={5} width='6' height='6' />
        <p className={css({color: 'gray.500', fontSize: 'sm', lineHeight: 'sm'})}>{comment.date}</p>
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
        })}
      >
        <span className='material-icons'>
          <PiLightbulb className={css({w: '6', h: '6', color: 'grey_500'})} />
        </span>
        <span>{comment.ratings.helpful}</span>
      </div>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          mr: '1',
          ml: '1',
          color: 'gray.500',
        })}
      >
        <span className='material-icons'>
          <PiHandsClappingDuotone className={css({w: '6', h: '6', color: 'grey_500'})} />
        </span>
        <span>{comment.ratings.thanks}</span>
      </div>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          mr: '1',
          ml: '1',
          color: 'gray.500',
        })}
      >
        <span className='material-icons'>
          <PiHeart className={css({w: '6', h: '6', color: 'grey_500'})} />
        </span>
        <span>{comment.ratings.love}</span>
      </div>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          mr: '1',
          ml: '1',
          color: 'gray.500',
        })}
      >
        <span className='material-icons'>
          <PiThumbsDown className={css({w: '6', h: '6', color: 'grey_500'})} />
        </span>
        <span>{comment.ratings.ohNo}</span>
      </div>
    </div>
  </div>
);

export default CommentBox;
