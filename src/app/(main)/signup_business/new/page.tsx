import {css} from '@styled/css';

import CreateBusinessForm from './_components/create-form';

function Page() {
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
        <CreateBusinessForm />
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
