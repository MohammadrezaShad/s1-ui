import {css} from '@styled/css';
import {cookies} from 'next/headers';

import {CookieName} from '@/constants';

import PhotoUpload from '../_components/photo-upload';

const Page = () => {
  const cookie = cookies();
  const token = cookie.get(CookieName.ACCESS_TOKEN)?.value || '';
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
      })}
    >
      <h1 className={css({textStyle: 'title1', color: 'grey_800', textAlign: 'left'})}>Photos</h1>
      <p
        className={css({
          textStyle: 'body14_medium',
          color: 'grey_700',
        })}
      >
        Photos are essential for presenting your business. To help customers learn about and choose
        your business, upload multiple photos to look your best.
      </p>
      <h2
        className={css({
          textStyle: 'body1',
          color: 'grey_800',
          mt: '6',
          mb: '4',
        })}
      >
        Upload and manage photos
      </h2>
      <PhotoUpload token={token} />
    </div>
  );
};

export default Page;
