import React from 'react';

import {Button, View} from 'react-native';

export const PostScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
};
