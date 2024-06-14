import React from 'react';
import {TbBookmark, TbClock, TbPhoto} from 'react-icons/tb';
import {css} from '@styled/css';

import NavItem from './_components/nav-item';
import ProgressGauge from './_components/progress-gauge';

interface Props {
  children: React.ReactNode;
  params: {bizId: string};
}

function Layout({children, params}: Props) {
  const {bizId} = params;
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'start',
        maxW: '8xl',
        mx: 'auto',
      })}
    >
      <section
        className={css({
          w: '1/3',
          pt: '10',
          hideBelow: 'md',
        })}
      >
        <div className={css({mx: 'auto', w: 'max-content', mb: '6'})}>
          <ProgressGauge value={25} />
        </div>
        <h2
          className={css({
            textStyle: 'body2',
            color: 'grey_400',
            textAlign: 'center',
          })}
        >
          Page status
        </h2>
        <nav
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: '2',
            py: '4',
            pr: '10',
            pl: '6',
          })}
        >
          <NavItem url={`/setup/${bizId as string}/operation-hours`}>
            <div className={css({display: 'flex', alignItems: 'center', gap: '2'})}>
              <TbClock />
              Business hours
            </div>
          </NavItem>
          <NavItem url={`/setup/${bizId as string}/specialties`}>
            <div className={css({display: 'flex', alignItems: 'center', gap: '2'})}>
              <TbBookmark />
              Specialties
            </div>
          </NavItem>
          <NavItem url={`/setup/${bizId as string}/photo-upload`}>
            <div className={css({display: 'flex', alignItems: 'center', gap: '2'})}>
              <TbPhoto />
              Photos
            </div>
          </NavItem>
        </nav>
      </section>
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
        {children}
      </section>
      <section
        className={css({
          w: '1/4',
          pt: '10',
          hideBelow: 'md',
        })}
      />
    </div>
  );
}

export default Layout;
