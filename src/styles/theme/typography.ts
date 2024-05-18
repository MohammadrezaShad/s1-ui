import {defineTextStyles} from '@pandacss/dev';
import {TextStyle} from '@styled/types/composition';

const fontWeight = {
  medium: '500',
  semibold: '600',
  extrabold: '800',
};

const getText = (textProperties: TextStyle) => ({
  fontStyle: 'normal',
  fontFamily: 'inherit',
  fontStretch: 'normal',
  letterSpacing: 'normal',
  lineHeight: '1.5',
  textSizeAdjust: '100%',
  textDecoration: 'None',
  textTransform: 'None',
  ...textProperties,
});

export const textStyles = defineTextStyles({
  display1: {
    description: '',
    value: getText({
      fontWeight: fontWeight.extrabold,
      fontSize: '68px',
      lineHeight: '102px',
    }),
  },
  display2: {
    description: '',
    value: getText({
      fontWeight: fontWeight.extrabold,
      fontSize: '32px',
      lineHeight: '48px',
    }),
  },
  title1: {
    description: '',
    value: getText({
      fontWeight: fontWeight.semibold,
      fontSize: '28px',
      lineHeight: '42px',
    }),
  },
  title2: {
    description: '',
    value: getText({
      fontWeight: fontWeight.semibold,
      fontSize: '24px',
      lineHeight: '36px',
    }),
  },
  title3: {
    description: '',
    value: getText({
      fontWeight: fontWeight.semibold,
      fontSize: '18px',
      lineHeight: '27px',
    }),
  },
  title4: {
    description: '',
    value: getText({
      fontWeight: fontWeight.semibold,
      fontSize: '14px',
      lineHeight: '21px',
    }),
  },
  buttonText: {
    description: '',
    value: getText({
      fontWeight: fontWeight.semibold,
      fontSize: '14px',
      lineHeight: '21px',
    }),
  },
  body1: {
    description: '',
    value: getText({
      fontWeight: fontWeight.medium,
      fontSize: '24px',
      lineHeight: '38px',
    }),
  },
  body14_medium: {
    description: '',
    value: getText({
      fontWeight: fontWeight.medium,
      fontSize: '14px',
      lineHeight: '21px',
    }),
  },
  body14_semibold: {
    description: '',
    value: getText({
      fontWeight: fontWeight.semibold,
      fontSize: '14px',
      lineHeight: '21px',
    }),
  },
  body12_medium: {
    description: '',
    value: getText({
      fontWeight: fontWeight.medium,
      fontSize: '12px',
      lineHeight: '18px',
    }),
  },
  body2: {
    description: '',
    value: getText({
      fontWeight: fontWeight.semibold,
      fontSize: '14px',
      lineHeight: '21px',
    }),
  },
  body3: {
    description: '',
    value: getText({
      fontWeight: fontWeight.medium,
      fontSize: '14px',
      lineHeight: '21px',
    }),
  },
  body4: {
    description: '',
    value: getText({
      fontWeight: fontWeight.medium,
      fontSize: '12px',
      lineHeight: '18px',
    }),
  },
});
