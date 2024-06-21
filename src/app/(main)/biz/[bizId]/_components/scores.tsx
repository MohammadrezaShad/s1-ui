import {css} from '@styled/css';

import {Maybe, VotesDetail} from '@/graphql/generated/types';

interface Props {
  scoreDetails: Maybe<VotesDetail> | undefined;
}

function Scores({scoreDetails}: Props) {
  function getScoreDetail(score: number) {
    return scoreDetails?.scoreGroup?.find(vote => vote.score === score);
  }

  function getScorePercentage(score: number) {
    return getScoreDetail(score)?.score || 0;
  }

  return (
    <>
      <div className={css({display: 'flex', alignItems: 'center', mt: '4'})}>
        <a
          href='/'
          className={css({
            fontSize: 'sm',
            lineHeight: 'sm',
            fontWeight: 'medium',
            color: 'grey_400',
            _dark: {color: 'blue.500'},
            _hover: {textDecorationLine: 'underline'},
          })}
        >
          5 star
        </a>
        <div
          className={css({
            w: '2/4',
            h: '2',
            ml: '4',
            mr: '4',
            bgColor: 'gray.200',
            rounded: 'lg',
            _dark: {bgColor: 'gray.500'},
          })}
        >
          <div
            className={css({h: '2', bgColor: 'red.500', rounded: 'lg'})}
            style={{width: `${getScorePercentage(5)}%`}}
          />
        </div>
        <span
          className={css({
            fontSize: 'sm',
            lineHeight: 'sm',
            fontWeight: 'medium',
            color: 'gray.500',
            _dark: {color: 'gray.400'},
          })}
        >
          {getScorePercentage(5)}%
        </span>
      </div>
      <div className={css({display: 'flex', alignItems: 'center', mt: '4'})}>
        <a
          href='/'
          className={css({
            fontSize: 'sm',
            lineHeight: 'sm',
            fontWeight: 'medium',
            color: 'grey_400',
            _dark: {color: 'blue.500'},
            _hover: {textDecorationLine: 'underline'},
          })}
        >
          4 star
        </a>
        <div
          className={css({
            w: '2/4',
            h: '2',
            ml: '4',
            mr: '4',
            bgColor: 'gray.200',
            rounded: 'lg',
            _dark: {bgColor: 'gray.500'},
          })}
        >
          <div
            className={css({h: '2', bgColor: 'orange.500', rounded: 'lg'})}
            style={{width: `${getScorePercentage(4)}%`}}
          />
        </div>
        <span
          className={css({
            fontSize: 'sm',
            lineHeight: 'sm',
            fontWeight: 'medium',
            color: 'gray.500',
            _dark: {color: 'gray.400'},
          })}
        >
          {getScorePercentage(5)}%
        </span>
      </div>
      <div className={css({display: 'flex', alignItems: 'center', mt: '4'})}>
        <a
          href='/'
          className={css({
            fontSize: 'sm',
            lineHeight: 'sm',
            fontWeight: 'medium',
            color: 'grey_400',
            _dark: {color: 'blue.500'},
            _hover: {textDecorationLine: 'underline'},
          })}
        >
          3 star
        </a>
        <div
          className={css({
            w: '2/4',
            h: '2',
            ml: '4',
            mr: '4',
            bgColor: 'gray.200',
            rounded: 'lg',
            _dark: {bgColor: 'gray.500'},
          })}
        >
          <div
            className={css({h: '2', bgColor: 'orange.300', rounded: 'lg'})}
            style={{width: `${getScorePercentage(3)}%`}}
          />
        </div>
        <span
          className={css({
            fontSize: 'sm',
            lineHeight: 'sm',
            fontWeight: 'medium',
            color: 'gray.500',
            _dark: {color: 'gray.400'},
          })}
        >
          {getScorePercentage(5)}%
        </span>
      </div>
      <div className={css({display: 'flex', alignItems: 'center', mt: '4'})}>
        <a
          href='/'
          className={css({
            fontSize: 'sm',
            lineHeight: 'sm',
            fontWeight: 'medium',
            color: 'grey_400',
            _dark: {color: 'blue.500'},
            _hover: {textDecorationLine: 'underline'},
          })}
        >
          2 star
        </a>
        <div
          className={css({
            w: '2/4',
            h: '2',
            ml: '4',
            mr: '4',
            bgColor: 'gray.200',
            rounded: 'lg',
            _dark: {bgColor: 'gray.500'},
          })}
        >
          <div
            className={css({h: '2', bgColor: 'yellow.300', rounded: 'lg'})}
            style={{width: `${getScorePercentage(2)}%`}}
          />
        </div>
        <span
          className={css({
            fontSize: 'sm',
            lineHeight: 'sm',
            fontWeight: 'medium',
            color: 'gray.500',
            _dark: {color: 'gray.400'},
          })}
        >
          {getScorePercentage(5)}%
        </span>
      </div>
      <div className={css({display: 'flex', alignItems: 'center', mt: '4'})}>
        <a
          href='/'
          className={css({
            fontSize: 'sm',
            lineHeight: 'sm',
            fontWeight: 'medium',
            color: 'grey_400',
            _dark: {color: 'blue.500'},
            _hover: {textDecorationLine: 'underline'},
          })}
        >
          1 star
        </a>
        <div
          className={css({
            w: '2/4',
            h: '2',
            ml: '4',
            mr: '4',
            bgColor: 'gray.200',
            rounded: 'lg',
            _dark: {bgColor: 'gray.500'},
          })}
        >
          <div
            className={css({h: '2', bgColor: 'yellow.200', rounded: 'lg'})}
            style={{width: `${getScorePercentage(1)}%`}}
          />
        </div>
        <span
          className={css({
            fontSize: 'sm',
            lineHeight: 'sm',
            fontWeight: 'medium',
            color: 'gray.500',
            _dark: {color: 'gray.400'},
          })}
        >
          {getScorePercentage(5)}%
        </span>
      </div>
    </>
  );
}

export default Scores;
