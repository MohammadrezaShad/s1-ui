import {styled} from '@styled/jsx';
import Link from 'next/link';

export const Header = styled('div', {
  base: {
    position: 'relative',
    minHeight: '[429px]',
  },
});

export const Overlay = styled('div', {
  base: {
    position: 'absolute',
    inset: '0',
    alignItems: 'flex-end',
    display: 'flex',
    px: '16',
    py: '10',
    zIndex: 1,
    bgImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%)',
  },
});

export const InfoWrapper = styled('div', {
  base: {
    flex: '1',
    pointerEvents: 'none',
    pr: '4',
    display: 'flex',
    flexDir: 'column',
    rowGap: '2',
  },
});

export const Title = styled('h1', {
  base: {
    textStyle: 'heading1',
    color: 'token(colors.white)',
  },
});

export const RatingWrapper = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5',
    '& > span': {
      textStyle: 'caption',
      color: 'token(colors.white)',
    },
  },
});

export const Taxonomy = styled('span', {
  base: {
    textStyle: 'caption',
    color: 'token(colors.white)',
  },
});

export const HoursLink = styled(Link, {
  base: {
    display: 'inline-flex',
    rounded: 'md',
    py: '0.5',
    px: '1',
    textAlign: 'center',
    transition: 'all 0.8s',
    bgColor: 'rgba(255, 255, 255, 0.1)',
    _hover: {
      bgColor: 'rgba(255, 255, 255, 0.3)',
    },
    color: 'token(colors.white)',
    cursor: 'pointer',
  },
});

export const Container = styled('div', {
  base: {
    maxW: '6xl',
    mx: 'auto',
    px: '10',
    mt: '8',
  },
});

export const Wrapper = styled('div', {
  base: {
    w: 'full',
    display: 'flex',
    flexWrap: 'nowrap',
  },
});

export const Details = styled('div', {
  base: {
    pr: '4',
    w: '[calc(100% / 3*2)]',
  },
});

export const Actions = styled('div', {
  base: {display: 'flex', gap: '2', alignItems: 'center'},
});

export const Section = styled('section', {
  base: {
    py: '8',
    borderTop: '1px solid token(colors.grey_200)',
    pt: '8',
    mt: '8',
    '& > h2': {
      textStyle: 'title3',
      mb: '6',
    },
  },
});

export const BusinessAddressContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'start',
    columnGap: '8',
  },
});

export const BusinessAddressWrapper = styled('div', {
  base: {
    display: 'flex',
    flexDir: 'column',
    alignItems: 'start',
    width: '[480px]',
  },
});

export const Address = styled('div', {
  base: {
    display: 'table',
    mt: '2',
  },
});

export const Cell = styled('div', {
  base: {
    display: 'table-cell',
  },
});

export const Amenity = styled('div', {
  base: {w: '1/2', mt: '4', px: '2', display: 'inline-block'},
});

export const RatingsContainer = styled('div', {
  base: {display: 'table', borderSpacingX: '16', mx: '-14'},
});

export const RatingsWrapper = styled('div', {
  base: {
    display: 'table-cell',
    verticalAlign: 'middle',
    pt: '10',
    mx: '8',
    '& > p': {textStyle: 'body2', color: 'grey_800', mb: '2'},
    '& > span': {color: 'grey_400', mt: '2'},
  },
});

export const ScoresWrapper = styled('div', {
  base: {
    display: 'table-cell',
    verticalAlign: 'middle',
    pt: '10',
    mx: '8',
    w: 'full',
  },
});

export const VisitorInfoContainer = styled('div', {
  base: {
    shadow: 'lg',
    px: '4',
    py: '5',
    rounded: 'sm',
    bgColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    w: 'full',
    mt: '4',
  },
});

export const VisitorInfoWrapper = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'start',
    gap: '4',
  },
});

export const VisitorReviewWrapper = styled('div', {
  base: {
    display: 'flex',
    flexDir: 'column',
    alignItems: 'start',
    gap: '4',
  },
});

export const VisitorRatingWrapper = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '2',
  },
});

export const ReviewLink = styled(Link, {
  base: {
    color: 'sky.400',
    fontSize: 'sm',
    _hover: {textDecoration: '!underline'},
    '& span': {fontWeight: 600},
  },
});

export const Contacts = styled('div', {
  base: {
    pl: '4',
    w: '[calc(100% / 3)]',
    position: 'sticky',
    alignSelf: 'start',
    top: '0',
  },
});
