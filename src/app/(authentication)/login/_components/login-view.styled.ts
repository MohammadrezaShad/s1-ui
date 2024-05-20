import {Box, styled} from '@styled/jsx';
import NextLink from 'next/link';

export const Link = styled(NextLink, {
  base: {
    textStyle: 'body4',
    color: 'primary_700',
    mr: 'auto',
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

export const LoginWrapper = styled(Box, {
  base: {
    w: 'full',
    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
  },
});

export const Form = styled('form', {
  base: {
    w: 'full',
  },
});

export const GButton = styled('button', {
  base: {
    w: 'full',
    h: '[3.5rem]',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgColor: 'white',
    _dark: {bgColor: 'gray.900', color: 'white'},
    borderWidth: '1px',
    borderColor: 'gray.300',
    rounded: 'lg',
    px: '6',
    py: '2',
    fontSize: 'sm',
    lineHeight: 'sm',
    fontWeight: 'medium',
    color: 'gray.800',
    _hover: {bgColor: 'gray.200'},
    _focus: {ring: 'none', ringOffset: 'none', shadow: '2'},
    mt: '4',
    cursor: 'pointer',
  },
});
