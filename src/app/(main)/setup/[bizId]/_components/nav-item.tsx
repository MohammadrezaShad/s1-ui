'use client';

import {css} from '@styled/css';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

function NavItem({url, children}: {url: string; children: React.ReactNode}) {
  const pathname = usePathname();
  const isActive = url === pathname;
  return (
    <Link
      className={css({
        color: isActive ? 'primary_600' : 'grey_600',
        px: '3',
        py: '1',
        bgColor: isActive ? 'primary_100' : 'transparent',
        rounded: 'xs',
      })}
      href={url}
    >
      {children}
    </Link>
  );
}

export default NavItem;
