import React from 'react';
import {BiPhoneCall} from 'react-icons/bi';
import {HiOutlineExternalLink} from 'react-icons/hi';
import {MdOutlineDirections, MdOutlineEdit} from 'react-icons/md';
import {css} from '@styled/css';

interface AddressBoxProps {
  phoneNumber?: string;
  address?: string;
  website?: string;
}

const removeProtocolAndWWW = (url: string): string => {
  const protocolRemoved = url.replace(/.*?:\/\//, '');

  const wwwRemoved = protocolRemoved.replace(/^www\./, '');

  return wwwRemoved;
};

const AddressBox: React.FC<AddressBoxProps> = ({phoneNumber, address, website}) => (
  <div
    className={css({
      bgColor: 'white',
      p: '4',
      rounded: 'lg',
      border: '1px solid token(colors.grey_200)',
      maxW: 'xl',
      mx: 'auto',
      mt: '4',
    })}
  >
    {website ? (
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: '2',
          borderBottom: '1px solid token(colors.grey_200)',
        })}
      >
        <a href={website}>
          <span className={css({color: 'green_600', cursor: 'pointer', fontWeight: 700})}>
            {removeProtocolAndWWW(website)}
          </span>
        </a>
        <span className={css({color: 'gray.600', cursor: 'pointer'})}>
          <HiOutlineExternalLink className={css({w: '6', h: '6'})} />
        </span>
      </div>
    ) : null}
    {phoneNumber ? (
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: '2',
          pb: '2',
          borderBottom: '1px solid token(colors.grey_200)',
        })}
      >
        <span className={css({color: 'gray.800'})}>{phoneNumber}</span>
        <span className={css({color: 'gray.600', cursor: 'pointer'})}>
          <BiPhoneCall className={css({w: '6', h: '6'})} />
        </span>
      </div>
    ) : null}
    <div className={css({mt: '2'})}>
      <p className={css({color: 'green_600', cursor: 'pointer', fontWeight: 700})}>
        Get Directions
      </p>
      <div
        className={css({display: 'flex', justifyContent: 'space-between', alignItems: 'center'})}
      >
        <span className={css({color: 'gray.500'})}>{address}</span>
        <span className={css({color: 'gray.600', cursor: 'pointer'})}>
          <MdOutlineDirections className={css({w: '6', h: '6'})} />
        </span>
      </div>
    </div>
    <button
      type='button'
      className={css({
        mt: '4',
        w: 'full',
        bgColor: 'gray.100',
        color: 'gray.600',
        pt: '2',
        pb: '2',
        rounded: 'md',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <span className='material-icons'>
        <MdOutlineEdit className={css({w: '6', h: '6'})} />
      </span>
      <span className={css({ml: '2'})}>Suggest an edit</span>
    </button>
  </div>
);

export default AddressBox;
