'use client';

import React, {useState} from 'react';
import {BiChevronDown} from 'react-icons/bi';
import {css} from '@styled/css';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setOpenSubMenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenSubMenu(null);
  };

  return (
    <nav onMouseLeave={handleMouseLeave}>
      <div
        className={css({
          w: 'container',
          maxW: 'container',
          ml: 'auto',
          mr: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        })}
      >
        <div className={css({display: 'flex'})}>
          {['Restaurants', 'Home Services', 'Auto Services', 'More'].map(item => (
            <div
              key={crypto.randomUUID()}
              className={css({pos: 'relative'})}
              onMouseEnter={() => handleMouseEnter(item)}
            >
              <button
                type='button'
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  p: '2',
                  textStyle: 'body4',
                  borderBottom: '2px solid transparent',
                  _hover: {borderBottomColor: 'red.500'},
                  rounded: 'rounded',
                  cursor: 'pointer',
                })}
              >
                {item}
                <BiChevronDown className={css({ml: '2', w: '4', h: '4'})} />
              </button>
              {openSubMenu === item && (
                <div
                  className={css({
                    pos: 'absolute',
                    left: '0',
                    mt: '2',
                    w: '56',
                    bgColor: 'white',
                    color: 'black',
                    rounded: 'rounded',
                    shadow: 'lg',
                  })}
                >
                  <div
                    className={css({
                      display: 'grid',
                      gridTemplateColumns: '2',
                      gap: '4',
                      p: '4',
                    })}
                  >
                    {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map(subItem => (
                      <Link
                        className={css({
                          display: 'flex',
                          alignItems: 'center',
                          mr: '2',
                          ml: '2',
                          _hover: {bgColor: 'gray.100'},
                          p: '2',
                          rounded: 'rounded',
                        })}
                        href='/'
                        key={crypto.randomUUID()}
                      >
                        <span>{subItem}</span>
                      </Link>
                    ))}
                    {['Item 5', 'Item 6', 'Item 7', 'Item 8'].map(subItem => (
                      <Link
                        className={css({
                          display: 'flex',
                          alignItems: 'center',
                          mr: '2',
                          ml: '2',
                          _hover: {bgColor: 'gray.100'},
                          p: '2',
                          rounded: 'rounded',
                        })}
                        href='/'
                        key={crypto.randomUUID()}
                      >
                        <span>{subItem}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
