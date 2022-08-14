import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles'
import { COLORS } from '../../contains'

export default Icon = () => {
    return (
        <View style={styles.container}>
            <FontAwesome name={'clock-o'} size={18} color={COLORS.icon} />
        </View>
    )
}
