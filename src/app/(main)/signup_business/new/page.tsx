import {css} from '@styled/css';
import {cookies} from 'next/headers';

import {CookieName} from '@/constants';

import CreateBusinessForm from './_components/create-form';

function Page() {
  const cookie = cookies();
  const token = cookie.get(CookieName.ACCESS_TOKEN)?.value || '';
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'start',
        maxW: '6xl',
        mx: 'auto',
      })}
    >
      <section
        className={css({
          w: 'full',
          py: '10',
          px: {
            base: 0,
            mdDown: '4',
          },
        })}
      >
        <h1 className={css({textStyle: 'title1', color: 'grey_800'})}>
          Get started by telling us how
          <br />
          customers can reach you
        </h1>
        <CreateBusinessForm token={token} />
      </section>
      <section
        className={css({
          w: 'full',
          pt: '10',
          hideBelow: 'md',
        })}
      />
    </div>
  );
}

export default Page;
