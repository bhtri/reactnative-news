import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import { COLORS } from '../contains'
import { HomeScreen, CategoryScreen, ProductScreen } from '../screens'
import { IconHeader } from '../components'

const HomeStack = createStackNavigator();

export default HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary
        },
        headerTintColor: COLORS.second,
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Trang chu', headerLeft: () => { return (<IconHeader />) }, headerTitleAlign: 'center' }} />
      <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} options={{ title: 'CategoryScreen' }} />
      <HomeStack.Screen name="ProductScreen" component={ProductScreen} options={{ title: 'ProductScreen' }} />
    </HomeStack.Navigator>
  );
}
