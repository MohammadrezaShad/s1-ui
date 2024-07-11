'use client';

import toast from 'react-hot-toast';
import {FiBookmark, FiShare, FiStar} from 'react-icons/fi';
import {TbPhotoPlus} from 'react-icons/tb';
import {css} from '@styled/css';
import Link from 'next/link';

import {Button} from '@/components';
import {createBookmark, deleteOneBookmark} from '@/graphql';
import {BusinessEntity, CollectionName} from '@/graphql/generated/types';

import {revalidate} from '../actions';
import {Actions} from './styled';

interface Props {
  business: BusinessEntity;
  token: string;
}

function BusinessActions({business, token}: Props) {
  const {isUserBookmark} = business;
  const handleClickShare = async () => {
    const url = window.location.href;
    const {title} = document;
    try {
      await navigator.share({title, text: 'Checkout this awesome place!', url});
    } catch (err: any) {
      console.log(err);
    }
  };

  const handleAddBookmark = async () => {
    if (!token) {
      toast.error('You must sign in first');
      return;
    }
    // if biz is bookmarked remove it else add it
    if (isUserBookmark) {
      try {
        await deleteOneBookmark({postId: business._id}, token as string);
        revalidate(`/biz/${business._id}`);
      } catch (error: any) {
        toast.error(error.message);
      }
    } else {
      try {
        await createBookmark({post: business._id, type: CollectionName.Business}, token as string);
        revalidate(`/biz/${business._id}`);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };

  return (
    <Actions>
      <Link
        href={`/writeareview/biz/${business._id}?returnUrl=%2Fbiz%2F${business._id}`}
        className={css({
          gap: '2',
          rounded: 'lg',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          bgColor: 'error_100',
          py: '2.5',
          px: '4',
        })}
      >
        <FiStar className={css({w: '6', h: '6'})} /> Write a review
      </Link>
      <Button visual='outlined' color='grey' size='md' type='button' className={css({gap: '2'})}>
        <TbPhotoPlus className={css({w: '6', h: '6'})} /> Add photo
      </Button>
      <Button
        onClick={handleClickShare}
        visual='outlined'
        color='grey'
        size='md'
        type='button'
        className={css({gap: '2'})}
      >
        <FiShare className={css({w: '6', h: '6'})} />
        Share
      </Button>
      <Button
        onClick={handleAddBookmark}
        visual='outlined'
        color='grey'
        size='md'
        type='button'
        className={css({gap: '2'})}
      >
        <FiBookmark
          className={css({
            w: '6',
            h: '6',
            '& path': {
              fill: isUserBookmark ? '#000' : 'inherit',
              stroke: isUserBookmark ? '#000' : 'inherit',
            },
          })}
        />
        {isUserBookmark ? 'Saved' : 'Save'}
      </Button>
    </Actions>
  );
}

export default BusinessActions;
