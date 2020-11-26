import React from 'react';
import Reactotron from 'reactotron-react-native';

import {Button, View} from 'react-native';

export const MainScreen = ({navigation, store}) => {
  Reactotron.log(store)
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Create')}
      />
    </View>
  );
};
