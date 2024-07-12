'use client';

import React from 'react';
import {FaStar} from 'react-icons/fa';
import {css, cx} from '@styled/css';

type RatingProps = {
  rating: number;
  maxRating?: number;
  height?: string;
  width?: string;
  readonly?: boolean;
  callback?: (rating: string) => void;
};

const Rating: React.FC<RatingProps> = ({
  rating,
  maxRating = 5,
  width = '8',
  height = '8',
  readonly = true,
  callback,
}) => {
  const getBackgroundStyle = (index: number) => {
    if (rating >= index + 1) {
      return css({bgColor: 'orange.500'});
    }
    if (rating > index && rating < index + 1) {
      return css({bgImage: 'gradient.to-r', bgColor: 'gray.200'});
    }
    return css({bgColor: 'gray.200'});
  };

  const handleSetRating = (index: number) => {
    if (readonly || !callback) return;
    callback(String(index + 1));
  };

  return (
    <div className={css({display: 'flex', gap: 1})}>
      {Array.from({length: maxRating}, (_, index) => (
        <button
          type='button'
          key={index}
          onClick={() => handleSetRating(index)}
          className={cx(
            css({
              pos: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              w: width,
              h: height,
              rounded: 'md',
              cursor: readonly ? 'default' : 'pointer',
            }),
            getBackgroundStyle(index),
          )}
        >
          <FaStar
            className={css({
              color: 'white',
              pos: 'relative',
              zIndex: '10',
              w: String(+width * 0.75),
              h: String(+height * 0.75),
            })}
          />
          {rating > index && rating < index + 1 && (
            <div
              className={css({
                pos: 'absolute',
                left: '0',
                top: '0',
                h: 'full',
                bgColor: 'orange.500',
                zIndex: '0',
                roundedBottomLeft: 'md',
                roundedTopLeft: 'md',
              })}
              style={{width: `${(rating - index) * 100}%`}}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default Rating;
