import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';

import styles from './style'
import { COLORS } from '../../contains'

export default IconHeader = () => {
    return (
        <TouchableOpacity onPress={() => { alert('aa') }} style={styles.container}>
            <Feather name="menu" size={24} color={COLORS.white} />
        </TouchableOpacity>
    )
}


