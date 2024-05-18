const LIGHT_COLORS = {
  grey: {
    100: 'rgba(245, 245, 247, 0.57)',
    200: 'rgba(227, 230, 235, 1)',
    300: 'rgba(186, 191, 197, 1)',
    400: 'rgba(130, 134, 140, 1)',
    500: 'rgba(58, 60, 64, 1)',
    600: 'rgba(42, 46, 55, 1)',
    700: 'rgba(29, 33, 46, 1)',
    800: 'rgba(12, 18, 47, 1)',
    900: 'rgba(11, 14, 30, 1)',
  },
  primary: {
    100: 'rgba(212, 219, 252, 1)',
    200: 'rgba(169, 184, 250, 1)',
    300: 'rgba(169, 184, 250, 1)',
    400: 'rgba(90, 111, 228, 1)',
    500: 'rgba(41, 64, 211, 1)',
    600: 'rgba(29, 48, 181, 1)',
    700: 'rgba(20, 34, 151, 1)',
    800: 'rgba(13, 23, 122, 1)',
    900: 'rgba(7, 15, 101, 1)',
  },
  pumpkin: {
    100: 'rgba(255, 234, 228, 1)',
    200: 'rgba(255, 225, 200, 1)',
    300: 'rgba(255, 204, 173, 1)',
    400: 'rgba(255, 204, 173, 1)',
    500: 'rgba(255, 151, 119, 1)',
    600: 'rgba(219, 108, 86, 1)',
    700: 'rgba(219, 108, 86, 1)',
    800: 'rgba(147, 40, 37, 1)',
    900: 'rgba(122, 22, 28, 1)',
  },
  yellow: {
    100: 'rgba(255, 250, 219, 1)',
    200: 'rgba(255, 243, 184, 1)',
    300: 'rgba(255, 235, 149, 1)',
    400: 'rgba(255, 226, 122, 1)',
    500: 'rgba(255, 213, 79, 1)',
    600: 'rgba(219, 176, 57, 1)',
    700: 'rgba(183, 142, 39, 1)',
    800: 'rgba(147, 109, 25, 1)',
    900: 'rgba(122, 86, 15, 1)',
  },
  pink: {
    100: 'rgba(255, 228, 225, 1)',
    200: 'rgba(255, 197, 195, 1)',
    300: 'rgba(255, 166, 172, 1)',
    400: 'rgba(255, 144, 163, 1)',
    500: 'rgba(255, 107, 147, 1)',
    600: 'rgba(219, 78, 130, 1)',
    700: 'rgba(183, 53, 114, 1)',
    800: 'rgba(183, 53, 114, 1)',
    900: 'rgba(183, 53, 114, 1)',
  },
  green: {
    100: 'rgba(212, 252, 236, 1)',
    200: 'rgba(171, 249, 224, 1)',
    300: 'rgba(126, 237, 212, 1)',
    400: 'rgba(91, 220, 202, 1)',
    500: 'rgba(44, 197, 189, 1)',
    600: 'rgba(32, 164, 169, 1)',
    700: 'rgba(22, 126, 141, 1)',
    800: 'rgba(14, 92, 114, 1)',
    900: 'rgba(8, 68, 94, 1)',
  },
  purple: {
    100: 'rgba(238, 234, 255, 1)',
    200: 'rgba(221, 213, 255, 1)',
    300: 'rgba(204, 193, 255, 1)',
    400: 'rgba(190, 177, 255, 1)',
    500: 'rgba(167, 152, 255, 1)',
    600: 'rgba(125, 111, 219, 1)',
    700: 'rgba(88, 76, 183, 1)',
    800: 'rgba(58, 48, 147, 1)',
    900: 'rgba(37, 29, 122, 1)',
  },
  success: {
    10: 'rgba(245, 255, 249, 1)',
    20: 'rgba(204, 255, 225, 1)',
    100: 'rgba(26, 255, 121, 1)',
  },
  error: {
    10: 'rgba(255, 245, 245, 1)',
    20: 'rgba(255, 204, 204, 1)',
    100: 'rgba(255, 26, 26, 1)',
  },
  white: 'rgba(255, 255, 255, 1)',
};

const DARK_COLORS = {
  grey: {
    100: 'rgba(245, 245, 247, 0.57)',
    200: 'rgba(227, 230, 235, 1)',
    300: 'rgba(186, 191, 197, 1)',
    400: 'rgba(130, 134, 140, 1)',
    500: 'rgba(58, 60, 64, 1)',
    600: 'rgba(42, 46, 55, 1)',
    700: 'rgba(29, 33, 46, 1)',
    800: 'rgba(12, 18, 47, 1)',
    900: 'rgba(11, 14, 30, 1)',
  },
  primary: {
    100: 'rgba(212, 219, 252, 1)',
    200: 'rgba(169, 184, 250, 1)',
    300: 'rgba(169, 184, 250, 1)',
    400: 'rgba(90, 111, 228, 1)',
    500: 'rgba(41, 64, 211, 1)',
    600: 'rgba(29, 48, 181, 1)',
    700: 'rgba(20, 34, 151, 1)',
    800: 'rgba(13, 23, 122, 1)',
    900: 'rgba(7, 15, 101, 1)',
  },
  pumpkin: {
    100: 'rgba(255, 234, 228, 1)',
    200: 'rgba(255, 225, 200, 1)',
    300: 'rgba(255, 204, 173, 1)',
    400: 'rgba(255, 204, 173, 1)',
    500: 'rgba(255, 151, 119, 1)',
    600: 'rgba(219, 108, 86, 1)',
    700: 'rgba(219, 108, 86, 1)',
    800: 'rgba(147, 40, 37, 1)',
    900: 'rgba(122, 22, 28, 1)',
  },
  yellow: {
    100: 'rgba(255, 250, 219, 1)',
    200: 'rgba(255, 243, 184, 1)',
    300: 'rgba(255, 235, 149, 1)',
    400: 'rgba(255, 226, 122, 1)',
    500: 'rgba(255, 213, 79, 1)',
    600: 'rgba(219, 176, 57, 1)',
    700: 'rgba(183, 142, 39, 1)',
    800: 'rgba(147, 109, 25, 1)',
    900: 'rgba(122, 86, 15, 1)',
  },
  pink: {
    100: 'rgba(255, 228, 225, 1)',
    200: 'rgba(255, 197, 195, 1)',
    300: 'rgba(255, 166, 172, 1)',
    400: 'rgba(255, 144, 163, 1)',
    500: 'rgba(255, 107, 147, 1)',
    600: 'rgba(219, 78, 130, 1)',
    700: 'rgba(183, 53, 114, 1)',
    800: 'rgba(183, 53, 114, 1)',
    900: 'rgba(183, 53, 114, 1)',
  },
  green: {
    100: 'rgba(212, 252, 236, 1)',
    200: 'rgba(171, 249, 224, 1)',
    300: 'rgba(126, 237, 212, 1)',
    400: 'rgba(91, 220, 202, 1)',
    500: 'rgba(44, 197, 189, 1)',
    600: 'rgba(32, 164, 169, 1)',
    700: 'rgba(22, 126, 141, 1)',
    800: 'rgba(14, 92, 114, 1)',
    900: 'rgba(8, 68, 94, 1)',
  },
  purple: {
    100: 'rgba(238, 234, 255, 1)',
    200: 'rgba(221, 213, 255, 1)',
    300: 'rgba(204, 193, 255, 1)',
    400: 'rgba(190, 177, 255, 1)',
    500: 'rgba(167, 152, 255, 1)',
    600: 'rgba(125, 111, 219, 1)',
    700: 'rgba(88, 76, 183, 1)',
    800: 'rgba(58, 48, 147, 1)',
    900: 'rgba(37, 29, 122, 1)',
  },
  success: {
    10: 'rgba(245, 255, 249, 1)',
    20: 'rgba(204, 255, 225, 1)',
    100: 'rgba(26, 255, 121, 1)',
  },
  error: {
    10: 'rgba(255, 245, 245, 1)',
    20: 'rgba(255, 204, 204, 1)',
    100: 'rgba(255, 26, 26, 1)',
  },
  white: 'rgba(255, 255, 255, 1)',
};

export const colors = {
  grey_100: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.grey[100], _dark: DARK_COLORS.grey[100]},
    },
  },
  grey_200: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.grey[200], _dark: DARK_COLORS.grey[200]},
    },
  },
  grey_300: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.grey[300], _dark: DARK_COLORS.grey[300]},
    },
  },
  grey_400: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.grey[400], _dark: DARK_COLORS.grey[400]},
    },
  },
  grey_500: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.grey[500], _dark: DARK_COLORS.grey[500]},
    },
  },
  grey_600: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.grey[600], _dark: DARK_COLORS.grey[600]},
    },
  },
  grey_700: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.grey[700], _dark: DARK_COLORS.grey[700]},
    },
  },
  grey_800: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.grey[800], _dark: DARK_COLORS.grey[800]},
    },
  },
  grey_900: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.grey[900], _dark: DARK_COLORS.grey[900]},
    },
  },
  primary_100: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.primary[100], _dark: DARK_COLORS.primary[100]},
    },
  },
  primary_200: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.primary[200], _dark: DARK_COLORS.primary[200]},
    },
  },
  primary_300: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.primary[300], _dark: DARK_COLORS.primary[300]},
    },
  },
  primary_400: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.primary[400], _dark: DARK_COLORS.primary[400]},
    },
  },
  primary_500: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.primary[500], _dark: DARK_COLORS.primary[500]},
    },
  },
  primary_600: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.primary[600], _dark: DARK_COLORS.primary[600]},
    },
  },
  primary_700: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.primary[700], _dark: DARK_COLORS.primary[700]},
    },
  },
  primary_800: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.primary[800], _dark: DARK_COLORS.primary[800]},
    },
  },
  primary_900: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.primary[900], _dark: DARK_COLORS.primary[900]},
    },
  },
  pumpkin_100: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pumpkin[100], _dark: DARK_COLORS.pumpkin[100]},
    },
  },
  pumpkin_200: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pumpkin[200], _dark: DARK_COLORS.pumpkin[200]},
    },
  },
  pumpkin_300: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pumpkin[300], _dark: DARK_COLORS.pumpkin[300]},
    },
  },
  pumpkin_400: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pumpkin[400], _dark: DARK_COLORS.pumpkin[400]},
    },
  },
  pumpkin_500: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pumpkin[500], _dark: DARK_COLORS.pumpkin[500]},
    },
  },
  pumpkin_600: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pumpkin[600], _dark: DARK_COLORS.pumpkin[600]},
    },
  },
  pumpkin_700: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pumpkin[700], _dark: DARK_COLORS.pumpkin[700]},
    },
  },
  pumpkin_800: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pumpkin[800], _dark: DARK_COLORS.pumpkin[800]},
    },
  },
  pumpkin_900: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pumpkin[900], _dark: DARK_COLORS.pumpkin[900]},
    },
  },
  yellow_100: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.yellow[100], _dark: DARK_COLORS.yellow[100]},
    },
  },
  yellow_200: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.yellow[200], _dark: DARK_COLORS.yellow[200]},
    },
  },
  yellow_300: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.yellow[300], _dark: DARK_COLORS.yellow[300]},
    },
  },
  yellow_400: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.yellow[400], _dark: DARK_COLORS.yellow[400]},
    },
  },
  yellow_500: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.yellow[500], _dark: DARK_COLORS.yellow[500]},
    },
  },
  yellow_600: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.yellow[600], _dark: DARK_COLORS.yellow[600]},
    },
  },
  yellow_700: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.yellow[700], _dark: DARK_COLORS.yellow[700]},
    },
  },
  yellow_800: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.yellow[800], _dark: DARK_COLORS.yellow[800]},
    },
  },
  yellow_900: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.yellow[900], _dark: DARK_COLORS.yellow[900]},
    },
  },
  pink_100: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pink[100], _dark: DARK_COLORS.pink[100]},
    },
  },
  pink_200: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pink[200], _dark: DARK_COLORS.pink[200]},
    },
  },
  pink_300: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pink[300], _dark: DARK_COLORS.pink[300]},
    },
  },
  pink_400: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pink[400], _dark: DARK_COLORS.pink[400]},
    },
  },
  pink_500: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pink[500], _dark: DARK_COLORS.pink[500]},
    },
  },
  pink_600: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pink[600], _dark: DARK_COLORS.pink[600]},
    },
  },
  pink_700: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pink[700], _dark: DARK_COLORS.pink[700]},
    },
  },
  pink_800: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pink[800], _dark: DARK_COLORS.pink[800]},
    },
  },
  pink_900: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.pink[900], _dark: DARK_COLORS.pink[900]},
    },
  },
  green_100: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.green[100], _dark: DARK_COLORS.green[100]},
    },
  },
  green_200: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.green[200], _dark: DARK_COLORS.green[200]},
    },
  },
  green_300: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.green[300], _dark: DARK_COLORS.green[300]},
    },
  },
  green_400: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.green[400], _dark: DARK_COLORS.green[400]},
    },
  },
  green_500: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.green[500], _dark: DARK_COLORS.green[500]},
    },
  },
  green_600: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.green[600], _dark: DARK_COLORS.green[600]},
    },
  },
  green_700: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.green[700], _dark: DARK_COLORS.green[700]},
    },
  },
  green_800: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.green[800], _dark: DARK_COLORS.green[800]},
    },
  },
  green_900: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.green[900], _dark: DARK_COLORS.green[900]},
    },
  },
  purple_100: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.purple[100], _dark: DARK_COLORS.purple[100]},
    },
  },
  purple_200: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.purple[200], _dark: DARK_COLORS.purple[200]},
    },
  },
  purple_300: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.purple[300], _dark: DARK_COLORS.purple[300]},
    },
  },
  purple_400: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.purple[400], _dark: DARK_COLORS.purple[400]},
    },
  },
  purple_500: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.purple[500], _dark: DARK_COLORS.purple[500]},
    },
  },
  purple_600: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.purple[600], _dark: DARK_COLORS.purple[600]},
    },
  },
  purple_700: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.purple[700], _dark: DARK_COLORS.purple[700]},
    },
  },
  purple_800: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.purple[800], _dark: DARK_COLORS.purple[800]},
    },
  },
  purple_900: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.purple[900], _dark: DARK_COLORS.purple[900]},
    },
  },
  success_10: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.success[10], _dark: DARK_COLORS.success[10]},
    },
  },
  success_20: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.success[20], _dark: DARK_COLORS.success[20]},
    },
  },
  success_100: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.success[100], _dark: DARK_COLORS.success[100]},
    },
  },
  error_10: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.error[10], _dark: DARK_COLORS.error[10]},
    },
  },
  error_20: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.error[20], _dark: DARK_COLORS.error[20]},
    },
  },
  error_100: {
    DEFAULT: {
      value: {base: LIGHT_COLORS.error[100], _dark: DARK_COLORS.error[100]},
    },
  },
};
