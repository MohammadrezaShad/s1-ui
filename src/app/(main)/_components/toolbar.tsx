import {FaMagnifyingGlass} from 'react-icons/fa6';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {MdOutlineComment} from 'react-icons/md';
import {PiUserCircle} from 'react-icons/pi';
import {css} from '@styled/css';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from './navbar';

function Toolbar() {
  return (
    <div
      className={css({
        w: 'full',
        bgColor: 'white',
        px: '10',
        py: '6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8',
        mb: '5',
      })}
    >
      <Image
        unoptimized
        alt=''
        src='https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/7ef71bf77a33/assets/img/brand/logo_desktop.svg'
        width={80}
        height={40}
      />
      <div
        className={css({
          maxW: '[1000px]',
          flex: '1',
        })}
      >
        <form
          className={css({
            display: 'flex',
            alignItems: 'center',
            rounded: 'md',
            border: '1px solid token(colors.grey_300)',
            overflow: 'hidden',
          })}
          action=''
        >
          <input
            placeholder='Thing to do, nail salons, plumbers'
            className={css({
              px: '3.5',
              py: '4',
              flexBasis: '[45%]',
              _focusVisible: {outline: 'none'},
            })}
            type='text'
            name='search'
            id='search'
          />
          <div className={css({h: '4', w: '[1px]', bgColor: 'grey_300'})} />
          <input
            placeholder='Istanbul, Turkey'
            className={css({
              px: '3.5',
              py: '4',
              flexBasis: '[45%]',
              _focusVisible: {outline: 'none'},
            })}
            type='text'
            name='location'
            id='location'
          />
          <button
            className={css({
              bgColor: 'red.500',
              p: '4',
              color: 'white',
              aspectRatio: 'square',
              ml: 'auto',
              cursor: 'pointer',
            })}
            type='submit'
          >
            <FaMagnifyingGlass className={css({w: '6', h: '6'})} />
          </button>
        </form>
        <div className={css({position: 'absolute', mt: '2'})}>
          <Navbar />
        </div>
      </div>
      <div>
        <Link
          className={css({
            _hover: {bgColor: 'grey_200'},
            p: '4',
            rounded: 'sm',
            transition: 'colors',
            transitionDuration: 'fast',
          })}
          href='/'
        >
          Write a review
        </Link>
      </div>
      <div className={css({display: 'flex', alignItems: 'center', gap: '4', pl: '6'})}>
        <MdOutlineComment className={css({w: '7', h: '7'})} />
        <IoMdNotificationsOutline className={css({w: '7', h: '7'})} />
        <PiUserCircle className={css({w: '7', h: '7'})} />
      </div>
    </div>
  );
}

export default Toolbar;
