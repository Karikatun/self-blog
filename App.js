import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigation} from './src/navigation/AppNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation store={'store'} />
    </NavigationContainer>
  );
}
