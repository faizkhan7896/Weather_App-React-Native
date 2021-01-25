import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';

import { View } from 'react-native';

import theme from './themes/theme';
import Title from './themes/atoms/Texts/Title';

const App = (): React.FC => {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Title text="Hello World" />
      </View>
    </ThemeProvider>
  );
};

export default App;
