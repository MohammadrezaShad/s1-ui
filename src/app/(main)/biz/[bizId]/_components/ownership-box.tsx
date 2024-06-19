import React from 'react';
import {MdClose} from 'react-icons/md';
import {css} from '@styled/css';
import Link from 'next/link';

import {Button} from '@/components';

interface Props {
  businessName: string;
}

const OwnershipBox: React.FC<Props> = ({businessName}) => (
  <div
    className={css({
      bgColor: 'white',
      p: '4',
      rounded: 'lg',
      border: '1px solid token(colors.grey_200)',
      maxW: 'xl',
      ml: 'auto',
      mr: 'auto',
      mt: '4',
    })}
  >
    <div className={css({display: 'flex', justifyContent: 'flex-end'})}>
      <span className={css({color: 'gray.600', cursor: 'pointer'})}>
        <MdClose className={css({w: '6', h: '6'})} />
      </span>
    </div>
    <div className={css({display: 'flex', flexDir: 'column'})}>
      <span className={css({color: 'gray.600'})}>{businessName}</span>
      <span className={css({color: 'gray.800', fontWeight: 'semibold'})}>
        Is this your business?
      </span>
    </div>
    <p className={css({mt: '2', color: 'gray.600'})}>
      Claim your business to immediately update business information, respond to reviews, and more!
    </p>
    <Button visual='outlined' color='grey' size='md' className={css({mt: '4', w: 'full'})}>
      Verify this business
    </Button>
    <Link
      href='/'
      className={css({
        mt: '2.5',
        display: 'inline-block',
        w: 'full',
        color: 'blue.500',
        fontSize: 'sm',
        pt: '2',
        pb: '2',
      })}
    >
      Explore benefits
    </Link>
  </div>
);

export default OwnershipBox;
