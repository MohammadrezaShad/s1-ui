import {css} from '@styled/css';
import Link from 'next/link';

import {SetupFinished} from '@/assets';

function Page() {
  return (
    <div
      className={css({
        w: 'full',
        bgColor: 'white',
        p: '6',
        mb: '4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      })}
    >
      <SetupFinished
        className={css({
          w: '[750px]',
          mb: '10',
        })}
      />
      <h1
        className={css({
          textStyle: 'display2',
          color: 'grey_600',
        })}
      >
        You&apos;re Business is ready to rock!
      </h1>
      <p
        className={css({
          textStyle: 'title4',
          color: 'grey_400',
          mt: '4',
        })}
      >
        You can change the settings from dashboard
      </p>
      <Link
        href='/'
        className={css({
          display: 'inline-block',
          bgColor: 'red.500',
          px: '4',
          py: '3',
          color: 'white',
          rounded: 'md',
          mx: 'auto',
          mt: '8',
        })}
      >
        Go to dashboard
      </Link>
    </div>
  );
}

export default Page;
