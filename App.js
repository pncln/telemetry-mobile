import React from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <HomeScreen />
  );
}

export default () => {
  return (<>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider { ...eva } theme= {{ ...eva.light, ...theme }}>
      <App />
    </ApplicationProvider>
    </>
  )
}