import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import theme from './themes/theme';

import Main from './views/Main';

import { LocationProvider } from './hooks/location/useLocation';

const App = (): React.FC => {
  return (
    <LocationProvider>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </LocationProvider>
  );
};

export default App;
