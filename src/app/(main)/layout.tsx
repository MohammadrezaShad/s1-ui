import React from 'react';
import {css} from '@styled/css';

import Footer from './_components/footer';
import Toolbar from './_components/toolbar';

interface Props {
  children: React.ReactNode;
}

function Layout({children}: Props) {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
      })}
    >
      <Toolbar />
      <main className={css({h: 'full'})}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
