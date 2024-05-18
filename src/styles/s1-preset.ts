import {definePreset} from '@pandacss/dev';

import {buttonRecipe} from '@/styles/recipes';
import {colors, globalCss, textStyles} from '@/styles/theme';

export default definePreset({
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },
  globalCss,
  theme: {
    semanticTokens: {
      colors,
    },
    extend: {
      breakpoints: {
        xs: '320px',
      },
      tokens: {
        shadows: {
          card: {
            value: '0px 7px 20px 0px rgba(40, 41, 61, 0.08)',
          },
        },
      },
      textStyles,
      recipes: {
        button: buttonRecipe,
      },
    },
  },
  utilities: {
    extend: {
      truncate: {
        className: 'truncate',
        values: {type: 'boolean'},
        transform(value: boolean) {
          if (!value) return {};
          return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          };
        },
      },
    },
  },
});
