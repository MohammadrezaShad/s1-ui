import React from 'react';
import {FaStar} from 'react-icons/fa';
import {css, cx} from '@styled/css';

type RatingProps = {
  rating: number;
  maxRating?: number;
  height?: string;
  width?: string;
};

const Rating: React.FC<RatingProps> = ({rating, maxRating = 5, width = '8', height = '8'}) => {
  const getBackgroundStyle = (index: number) => {
    if (rating >= index + 1) {
      return css({bgColor: 'orange.500'});
    }
    if (rating > index && rating < index + 1) {
      return css({bgImage: 'gradient.to-r', bgColor: 'gray.200'});
    }
    return css({bgColor: 'gray.200'});
  };

  return (
    <div className={css({display: 'flex', gap: 1})}>
      {Array.from({length: maxRating}, (_, index) => (
        <div
          key={index}
          className={cx(
            css({
              pos: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              w: width,
              h: height,
              rounded: 'md',
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
        </div>
      ))}
    </div>
  );
};

export default Rating;
