import React from 'react'
import { View, Text } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'

import styles from './styles'

export default DrawerContent = (props) => {
    console.log(props);
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}
