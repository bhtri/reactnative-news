import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MyTabs from './navigation';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="MyTabs">
        <Drawer.Screen name="MyTabs" component={MyTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
