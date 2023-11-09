import 'styled-components';

// and extend them!
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'styled-components' {
  export interface BorderRadiusType {
    none: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    full: string;
  }

  export interface ColorType {
    inherit: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
    primary50: string;
    primary100: string;
    primary200: string;
    primary300: string;
    primary400: string;
    primary500: string;
    primary600: string;
    primary700: string;
    primary800: string;
    primary900: string;

    secondary50: string;
    secondary100: string;
    secondary200: string;
    secondary300: string;
    secondary400: string;

    error50: string;
    error100: string;
    error200: string;
    error300: string;
    error400: string;
    error500: string;
    error600: string;
    error700: string;
    error800: string;
    error900: string;

    success50: string;
    success100: string;
    success200: string;
    success300: string;
    success400: string;
    success500: string;
    success600: string;
    success700: string;
    success800: string;
    success900: string;
    warning50: string;
    warning100: string;
    warning200: string;
    warning300: string;
    warning400: string;
    warning500: string;
    warning600: string;
    warning700: string;
    warning800: string;
    warning900: string;
    nero: string;
    white: string;
    black: string;
    orange: string;
    green: string;
    freeSpeechRed: string;
    blue: string;
    lightBlue: string;
    hoki: string;
    rockBlue: string;
    gray: string;
    abbey: string;
    merlin: string;
    cottenSeed: string;
    doveGray: string;
    geyser: string;
    lightGeyser: string;
    godgray: string;
    mercury: string;
    brightGray: string;
    shuttleGray: string;
    grayish: string;
    whitish: string;
    lightGray: string;
    pink: string;
    brightBlue: string;
    light: string;
    darkGray: string;
    lightRed: string;
    darkRed: string;
    volcanoGray: string;
    lighterRed: string;
    lightVolcanoGray: string;
    mainGray: string;
    darkCyan: string;
    reddish: string;
    blackGray: string;
    brightPink: string;
    pinkish: string;
  }

  export interface GradientType {
    blackToTransparent;
  }

  export interface FontType {
    primary: string;
    satoshi: string;
  }

  export interface FontSizeType {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  }

  export interface FontWeightType {
    thin: number;
    extraLight: number;
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
    extraBold: number;
    black: number;
  }

  export interface LetterSpacingType {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
    widest: string;
  }

  export interface LetterHeightType {
    normal: string;
    none: string;
    shorter: string;
    short: string;
    base: string;
    tall: string;
    taller: string;
  }

  export interface MediaQueryType {
    xs: (...args: any) => string;
    small: (...args: any) => string;
    medium: (...args: any) => string;
    large: (...args: any) => string;
    up: (breakpoint: string, vertical?: boolean) => (...args: any) => FlattenSimpleInterpolation;
    down: (breakpoint: string, vertical?: boolean) => (...args: any) => FlattenSimpleInterpolation;
    between: (
      breakpointMin: string,
      breakpointMax: string,
      vertical?: boolean
    ) => (...args: any) => FlattenSimpleInterpolation;
  }

  export interface SpaceType {
    px: string;
    0: string;
    0.5: string;
    1: string;
    1.5: string;
    2: string;
    2.5: string;
    3: string;
    3.5: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
  }

  export interface SizeType extends SpaceType {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  }

  export interface ZindexType {
    hide: number;
    auto: string;
    base: number;
    docked: number;
    dropdown: number;
    sticky: number;
    banner: number;
    overlay: number;
    modal: number;
    popover: number;
    skipLink: number;
    toast: number;
    tooltip: number;
  }

  export interface TransitionType {
    easing: {
      easeInOut: string;
      easeOut: string;
      easeIn: string;
      sharp: string;
    };
    duration: {
      shortest: number;
      shorter: number;
      short: number;
      standard: number;
      complex: number;
      enteringScreen: number;
      leavingScreen: number;
    };
  }

  export interface DefaultTheme {
    media: MediaQueryType;
    breakpoints: string[];
    borderRadius: BorderRadiusType;
    colors: ColorType;
    gradients: GradientType;
    fonts: FontType;
    fontSizes: FontSizeType;
    fontWeights: FontWeightType;
    lettingSpacings: LetterSpacingType;
    lineHeights: LetterHeightType;
    sizes: SizeType;
    space: SpaceType;
    zIndices: ZindexType;
    transitions: TransitionType;
  }
}
