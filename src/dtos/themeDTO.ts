import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    platform: 'ios' | 'android' | 'windows' | 'macos' | 'web';
    metrics: {
      height: number;
      width: number;
      baseMargin: number;
      PaddingStatus: number;
    };
    color: {
      black: string;
      white: string;
      cyan: string;
      blue: string;
      navy: string;
      yellow: string;
      gradient: string;
      gray900: string;
      gray700: string;
      gray500: string;
      gray400: string;
      lightGreen: string;
      ebonyDark: string;
      whiteGray: string;
    };
    space: {
      small: number;
      medium: number;
      large: number;
      xlarge: number;
    };
    fontSize: {
      xsmall: number;
      small: number;
      regular: number;
      middle: number;
      medium: number;
      chapter: number;
      subtitle: number;
      max: number;
    };
    fontFamily: {
      regular: string;
      medium: string;
      bold: string;
    };
  }
}
