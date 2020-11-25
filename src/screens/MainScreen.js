import React from 'react';

import {Button, View} from 'react-native';

export const MainScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Post')}
      />
    </View>
  );
};
