import React from 'react';
import {MdContentCopy, MdOutlineEdit} from 'react-icons/md';
import {css} from '@styled/css';

interface AddressBoxProps {
  phoneNumber: string;
  address: string;
  city: string;
  country: string;
}

const AddressBox: React.FC<AddressBoxProps> = ({phoneNumber, address, city, country}) => (
  <div
    className={css({
      bgColor: 'white',
      p: '4',
      rounded: 'lg',
      border: '1px solid token(colors.grey_200)',
      maxW: 'xl',
      ml: 'auto',
      mr: 'auto',
      mt: '4',
    })}
  >
    <div className={css({display: 'flex', justifyContent: 'space-between', alignItems: 'center'})}>
      <span className={css({color: 'gray.800'})}>{phoneNumber}</span>
      <span className={css({color: 'gray.600', cursor: 'pointer'})}>
        <MdContentCopy className={css({w: '6', h: '6'})} />
      </span>
    </div>
    <div className={css({mt: '2'})}>
      <p className={css({color: 'blue.600', cursor: 'pointer'})}>Get Directions</p>
      <p className={css({color: 'gray.800'})}>{address}</p>
      <p className={css({color: 'gray.800'})}>{city}</p>
      <p className={css({color: 'gray.800'})}>{country}</p>
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
