import {styled} from '@styled/jsx';

export const Form = styled('form', {
  base: {maxW: 'sm', ml: 'auto', mr: 'auto', direction: 'ltr'},
});

export const Wrapper = styled('div', {
  base: {display: 'flex', mb: '2', columnGap: '[11px]', w: 'full'},
});

export const Label = styled('label', {
  base: {
    pos: 'absolute',
    w: '1',
    h: '1',
    p: '1',
    m: '1',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0',
  },
});

export const Input = styled('input', {
  base: {
    display: 'block',
    w: '[67px]',
    h: '[56px]',
    py: '3',
    textStyle: 'title1',
    textAlign: 'center',
    color: 'grey_500',
    bgColor: 'white',
    borderWidth: '1px',
    borderColor: 'grey_500',
    rounded: '2xl',
    _dark: {bgColor: 'grey_700', borderColor: 'grey_600', color: 'white'},
    _valid: {
      bgColor: 'primary_100',
      borderColor: 'primary_400',
    },
    _focusVisible: {
      outline: 'none',
    },
  },
});
