import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default GridPrice = ({ data, coin, numberDown }) => {

    const layoutNumber = numberDown ? styles.layoutTextDow : styles.layoutTextInCr

    let name = coin ? data.name : data.type;
    let buy = coin ? data.price : data.buy;
    let sell = coin ? data.percent_change_24h : data.sell;

    return (
        <View style={styles.layoutChild}>
            <View style={styles.column}>
                <Text style={styles.layoutText}>{name}</Text>
            </View>
            <View style={styles.column} >
                <Text style={styles.layoutText}>{buy}</Text>
            </View>
            <View style={styles.column} >
                <Text style={[styles.layoutText, layoutNumber]}>{sell}</Text>
            </View>
        </View>
    )
}
