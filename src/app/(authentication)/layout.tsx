import {css} from '@styled/css';

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div
      className={css({
        bgColor: 'primary_600',
        w: 'screen',
        h: 'screen',
        pos: 'relative',
      })}
    >
      <div
        className={css({
          px: '12',
          bg: 'white',
          display: 'flex',
          flexDir: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          rounded: '3xl',
          w: '[507px]',
          h: '[709px]',
        })}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
