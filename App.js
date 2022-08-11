import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MyTabs from './navigation';
import { DrawerContent } from './screens';

const Drawer = createDrawerNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="MyTabs">
        <Drawer.Screen name="MyTabs" component={MyTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
