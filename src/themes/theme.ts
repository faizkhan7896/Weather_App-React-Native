import { Dimensions, StatusBar, Platform } from 'react-native';

const { height, width } = Dimensions.get('screen');

export default {
  platform: Platform.OS,
  metrics: {
    height,
    width,
    baseMargin: height * 0.02,
    PaddingStatus: StatusBar.currentHeight || 20,
  },
  color: {
    black: '#000e1a',
    white: '#fff',
    cyan: '#01BED7',
    blue: '#145DA0',
    navy: '#004175',
    yellow: '#f4ac0c',
    gradient: ['#000', '#1a202c'],
    gray900: '#1a202c',
    gray700: '#4a5568',
    gray500: '#a0aec0',
    gray400: '#cbd5e0',
    lightGreen: '#18c17a',
    ebonyDark: '#232b3a',
  },
  space: {
    small: 4,
    medium: 8,
    large: 16,
    xlarge: 32,
  },
  fontSize: {
    xsmall: 10,
    small: 12,
    regular: 14,
    middle: 16,
    medium: 20,
    chapter: 24,
    subtitle: 36,
    title: 42,
  },
  fontFamily: {
    regular: 'Barlow-Regular',
    medium: 'Barlow-Medium',
    bold: 'Barlow-SemiBold',
  },
};
