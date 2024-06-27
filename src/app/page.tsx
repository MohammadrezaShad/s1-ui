import {css} from '@styled/css';

export default function Home() {
  return (
    <main
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minH: 'screen',
      })}
    >
      <h1
        className={css({
          textStyle: 'title1',
          color: 'grey_800',
          textAlign: 'center',
        })}
      >
        Our website is undergoing some maintenance.
        <br />
        We&apos;ll be back soon.
      </h1>
    </main>
  );
}
