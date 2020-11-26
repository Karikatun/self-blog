import React from 'react';

import {Platform, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import {MainScreen} from '../screens/MainScreen';
import {PostScreen} from '../screens/PostScreen';
import {AboutScreen} from '../screens/AboutScreen';
import {CreatePostScreen} from '../screens/CreatePostScreen';
import {THEME} from '../theme';

const Stack = createStackNavigator();
const BottomTab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const stackScreenOptions = {
  screenOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  },
};

// Выбор темизации табов для разных типов устройств
const getNavigationOptions = () => {
  if (Platform.OS === 'ios') {
    //Props for the ios navigator
    return {
      initialRouteName: 'MainNavigation',
      tabBarOptions: {activeTintColor: THEME.MAIN_COLOR},
    };
  }
  //Props for any other OS navigator
  return {
    initialRouteName: 'MainNavigation',
    shifting: true,
    tabBarOptions: {activeTintColor: '#fff'},
    barStyle: {backgroundColor: THEME.MAIN_COLOR},
  };
};

// Вывод иконки бокового меню
const renderDrawerIcon = (navigation) => (
  <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
    <Icon
      name="menu-outline"
      size={24}
      color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
      style={styles.leftHeaderButton}
    />
  </TouchableWithoutFeedback>
);

export const MainNavigation = ({navigation}) => {
  return (
    <Stack.Navigator {...stackScreenOptions}>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'Мой блог',
          headerRight: () => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Create')}>
              <Icon
                name="add-circle-outline"
                size={24}
                color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
                style={styles.rightHeaderButton}
              />
            </TouchableWithoutFeedback>
          ),
          headerLeft: () => renderDrawerIcon(navigation),
        }}
      />
      <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>
  );
};

// Навигация на странице избранных постов
const BookedNavigation = ({navigation}) => {
  return (
    <Stack.Navigator {...stackScreenOptions}>
      <Stack.Screen
        name={'Booked'}
        component={MainScreen}
        options={{
          title: 'Избранное',
          headerLeft: () => renderDrawerIcon(navigation),
        }}
      />
    </Stack.Navigator>
  );
};

// Навигация на странице информации о приложении
const AboutNavigation = ({navigation}) => {
  return (
    <Stack.Navigator {...stackScreenOptions}>
      <Stack.Screen
        name={'About'}
        component={AboutScreen}
        options={{
          title: 'О приложении',
          headerLeft: () => renderDrawerIcon(navigation),
        }}
      />
    </Stack.Navigator>
  );
};

// Навигация на странице создания нового поста
const CreateNavigation = ({navigation}) => {
  return (
    <Stack.Navigator {...stackScreenOptions}>
      <Stack.Screen
        name={'Create'}
        component={CreatePostScreen}
        options={{
          title: 'Создать пост',
          headerLeft: () => renderDrawerIcon(navigation),
        }}
      />
    </Stack.Navigator>
  );
};

// Нижние табы на главной странице
export const BottomNavigation = () => {
  return (
    <BottomTab.Navigator {...getNavigationOptions()}>
      <BottomTab.Screen
        name="Все"
        component={MainNavigation}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="albums-outline" size={25} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Избранное"
        component={BookedNavigation}
        options={{
          tabBarIcon: ({color}) => <Icon name="star" size={25} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerType="back"
      drawerContentOptions={{
        activeTintColor: THEME.MAIN_COLOR,
      }}>
      <Drawer.Screen
        name="Main"
        component={BottomNavigation}
        options={{
          title: 'Главная страница',
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutNavigation}
        options={{
          title: 'О приложении',
        }}
      />
      <Drawer.Screen
        name="Create"
        component={CreateNavigation}
        options={{
          title: 'Создать пост',
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  rightHeaderButton: {
    marginRight: 15,
  },
  leftHeaderButton: {
    marginLeft: 15,
  },
});
