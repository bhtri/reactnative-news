import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import { SettingScreen } from '../screens'
import { IconHeader } from '../components'

const SettingStack = createStackNavigator();

export default SettingStackScreen = () => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary
        },
        headerTintColor: COLORS.second
      }}
    >
      <SettingStack.Screen name="SettingScreen" component={SettingScreen} options={{
        title: 'Setting',
        headerLeft: () => { return (<IconHeader />) },
        headerTitleAlign: 'center'
      }} />
    </SettingStack.Navigator>
  );
}
