import {defineRecipe} from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    color: 'inherit',
    border: 'none',
    cursor: 'pointer',
    margin: '0',
    display: 'inline-flex',
    outline: '0',
    padding: '0',
    position: 'relative',
    alignItems: 'center',
    userSelect: 'none',
    verticalAlign: 'middle',
    justifyContent: 'center',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    webkitTapHighlightColor: 'transparent',
    whiteSpace: 'nowrap',
    borderRadius: 'lg',
    transition: 'all 0.3s',
  },
  variants: {
    visual: {
      contained: {color: 'white'},
      outlined: {
        color: 'primary_500',
        _hover: {
          color: 'primary_500',
        },
      },
      text: {
        color: 'primary_500',
        _hover: {
          color: 'primary_500',
        },
      },
    },
    size: {
      lg: {height: '14', textStyle: 'buttonText', minWidth: '16', padding: 2},
      sm: {height: 'max-content', textStyle: 'body12_medium', minWidth: '16', padding: 0},
    },
    color: {
      primary: {},
      secondary: {},
      surface: {},
      success: {},
      danger: {},
      info: {},
      warning: {},
      background: {},
      backgroundVariant: {},
      backgroundSecondary: {},
      stroke: {},
      strokeVariant: {},
      strokeSecondary: {},
      textPrimary: {},
      textSecondary: {},
      textInverted: {},
      textVariant: {},
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'default',
        pointerEvents: 'none',
      },
    },
  },
  compoundVariants: [
    {
      visual: 'contained',
      color: 'primary',
      css: {
        bg: 'primary_500',
        _hover: {bg: 'primary_400'},
      },
    },
    {
      visual: 'outlined',
      color: 'primary',
      css: {
        border: '1px solid',
        borderColor: 'primary_500',
        _hover: {bg: 'gray_100'},
      },
    },
    {
      visual: 'text',
      color: 'primary',
      css: {},
    },
    {
      visual: 'contained',
      color: 'success',
      css: {
        bg: 'success_100',
        _hover: {bg: 'success_20'},
      },
    },
    {
      visual: 'outlined',
      color: 'success',
      css: {
        border: '1px solid',
        borderColor: 'success_100',
        _hover: {bg: 'success_20'},
      },
    },
    {
      visual: 'contained',
      color: 'danger',
      css: {
        bg: 'error_100',
        _hover: {bg: 'error_20'},
      },
    },
    {
      visual: 'outlined',
      color: 'danger',
      css: {
        border: '1px solid',
        borderColor: 'error_100',
        _hover: {bg: 'error_20'},
      },
    },
  ],
});
