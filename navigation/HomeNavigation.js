import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import { COLORS } from '../contains'
import { HomeScreen, CategoryScreen, ProductScreen } from '../screens'
import { IconHeader } from '../components'

const HomeStack = createStackNavigator();

export default HomeStackScreen = (props) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary
        },
        headerTintColor: COLORS.second,
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeft: () => { return (<IconHeader {...props} />) }, headerTitleAlign: 'center'
        }} />
      <HomeStack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{ title: 'CategoryScreen' }} />
      <HomeStack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ title: 'ProductScreen' }} />
    </HomeStack.Navigator>
  );
}
