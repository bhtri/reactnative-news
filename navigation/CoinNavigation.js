import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import { CoinScreen } from '../screens'
import { IconHeader } from '../components'

const CoinStack = createStackNavigator();

export default CoinStackScreen = () => {
  return (
    <CoinStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary
        },
        headerTintColor: COLORS.second
      }}
    >
      <CoinStack.Screen name="CoinScreen" component={CoinScreen} options={{ title: 'Coin', headerLeft: () => { return (<IconHeader />) }, headerTitleAlign: 'center' }} />
    </CoinStack.Navigator>
  );
}
