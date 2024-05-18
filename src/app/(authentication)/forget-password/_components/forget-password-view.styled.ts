import {Box, styled} from '@styled/jsx';
import NextLink from 'next/link';

export const Link = styled(NextLink, {
  base: {
    textStyle: 'body4',
    color: 'primary_700',
    ml: 'auto',
    mt: '2',
    _visited: {
      color: 'primary_700',
    },
  },
});

export const Input = styled('input', {
  base: {
    textStyle: 'body14_medium',
    color: 'grey_400',
    w: 'full',
    _focusVisible: {
      outline: 'none',
    },
  },
});

export const TextField = styled('div', {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '2',
    w: 'full',
  },
});

export const Label = styled('label', {
  base: {
    textStyle: 'body2',
    color: 'grey_500',
  },
});

export const InputWrapper = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '3',
    rounded: 'lg',
    border: '1px solid token(colors.grey_400)',
    px: '3',
    py: '4',
  },
});

export const Title = styled('h1', {
  base: {
    textStyle: 'title1',
    color: 'grey_900',
    mb: '[105px]',
  },
});

export const Subtitle = styled('p', {
  base: {
    textStyle: 'body14_medium',
    color: 'grey_900',
    mb: '16',
  },
});

export const Wrapper = styled(Box, {
  base: {
    w: ' full',
    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const Form = styled('form', {
  base: {
    w: 'full',
    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
