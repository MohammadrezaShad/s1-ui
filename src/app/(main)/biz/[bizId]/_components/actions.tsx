'use client';

import {FiBookmark, FiShare, FiStar} from 'react-icons/fi';
import {TbPhotoPlus} from 'react-icons/tb';
import {css} from '@styled/css';

import {Button} from '@/components';

import {Actions} from './styled';

function BusinessActions() {
  const handleClickShare = async () => {
    const url = window.location.href;
    const {title} = document;
    try {
      await navigator.share({title, text: 'Checkout this awesome place!', url});
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Actions>
      <Button visual='contained' color='danger' size='md' type='button' className={css({gap: '2'})}>
        <FiStar className={css({w: '6', h: '6'})} /> Write a review
      </Button>
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
      <Button visual='outlined' color='grey' size='md' type='button' className={css({gap: '2'})}>
        <FiBookmark className={css({w: '6', h: '6'})} />
        Save
      </Button>
    </Actions>
  );
}

export default BusinessActions;
