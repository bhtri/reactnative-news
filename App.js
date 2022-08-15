import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MyTabs from './navigation';
import SettingStackScreen from './navigation/SettingNavigation';
import { DrawerContent } from './screens';

const Drawer = createDrawerNavigator();

import CategoryService from './services/category';

export default function App(props) {

  const data = CategoryService.getCategory();
  console.log(data);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="MyTabs">
        <Drawer.Screen name="MyTabs" component={MyTabs} />
        <Drawer.Screen name="Setting" component={SettingStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
