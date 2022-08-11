import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './style'
import { COLORS } from '../../contains'

export default IconHeader = () => {
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <TouchableOpacity onPress={openDrawer} style={styles.container}>
            <Feather name="menu" size={24} color={COLORS.white} />
        </TouchableOpacity>
    )
}
