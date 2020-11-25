import React from 'react';

import {Platform, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {MainScreen} from '../screens/MainScreen';
import {PostScreen} from '../screens/PostScreen';

const Stack = createStackNavigator();
const BottomTab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialBottomTabNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>
  );
};

// Нижние табы на главной странице
export const BottomNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={'Все'} component={MainNavigation} />

      <BottomTab.Screen name="Избранное" component={PostScreen} />
    </BottomTab.Navigator>
  );
};
