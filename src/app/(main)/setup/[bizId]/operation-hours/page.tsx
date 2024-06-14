import {css} from '@styled/css';

import WorkHoursForm from '@/app/(main)/setup/[bizId]/_components/work-hours-form';

const Home = () => (
  <div
    className={css({
      minH: 'screen',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'center',
    })}
  >
    <h1 className={css({textStyle: 'title1', color: 'grey_800', textAlign: 'left'})}>
      Business hours
    </h1>
    <p
      className={css({
        textStyle: 'body14_medium',
        color: 'grey_700',
      })}
    >
      Add your business hours so customers know when you&apos;re open. You can add upcoming holiday
      hours or any special hours on Business Information
    </p>
    <h2
      className={css({
        textStyle: 'body1',
        color: 'grey_800',
        mt: '6',
        mb: '4',
      })}
    >
      When are you open?
    </h2>
    <WorkHoursForm />
  </div>
);

export default Home;
