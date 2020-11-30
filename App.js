import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigation} from './src/navigation/AppNavigation';
import {ListStore} from './src/Store';
import {Provider} from 'mobx-react';

export default function App() {
  const store = new ListStore();

  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
