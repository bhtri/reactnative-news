import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import { GoldScreen } from '../screens'

const GoldStack = createStackNavigator();

export default  GoldStackScreen = () => {
  return (
    <GoldStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary
        },
        headerTintColor: COLORS.second
      }}
    >
      <GoldStack.Screen name="SeenScreen" component={GoldScreen} options={{ title: 'Gold' }} />
    </GoldStack.Navigator>
  );
}
