import {Box, styled} from '@styled/jsx';

export const Title = styled('h1', {
  base: {
    textStyle: 'title1',
    color: 'grey_900',
    mb: '12',
  },
});

export const Subtitle = styled('p', {
  base: {
    textStyle: 'body14_medium',
    color: 'grey_900',
    mb: '8',
  },
});

export const ResetWrapper = styled(Box, {
  base: {
    w: 'full',
    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
  },
});
