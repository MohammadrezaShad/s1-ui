import {styled} from '@styled/jsx';
import NextLink from 'next/link';

export const Link = styled(NextLink, {
  base: {
    textStyle: 'body4',
    color: 'primary_700',
    _visited: {
      color: 'primary_700',
    },
  },
});

export const Subtitle = styled('p', {
  base: {
    textStyle: 'body14_semibold',
    color: 'grey_500',
    '& span': {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 700,
      color: 'grey_900',
    },
  },
});

export const ContentWrapper = styled('div', {
  base: {
    display: 'flex',
    flexDir: 'column',
    my: '[141px]',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: '12',
  },
});

export const SubtitleWrapper = styled('div', {
  base: {
    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
    rowGap: '2',
  },
});

export const PinWrapper = styled('div', {
  base: {
    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
    rowGap: '6',
  },
});
