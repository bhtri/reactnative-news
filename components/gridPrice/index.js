import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default GridPrice = ({ numberDown }) => {

    const layoutNumber = numberDown ? styles.layoutTextDow : styles.layoutTextInCr

    return (
        <View style={styles.layoutChild}>
            <View style={styles.column}>
                <Text style={styles.layoutText}>Vàng SJC 1L - 10L</Text>
            </View>
            <View style={styles.column} >
                <Text style={styles.layoutText}>46.000.000đ</Text>
            </View>
            <View style={styles.column} >
                <Text style={[styles.layoutText, layoutNumber]}>50.000.000đ</Text>
            </View>
        </View>
    )
}
