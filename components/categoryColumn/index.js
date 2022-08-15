import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import ProductColumn from '../productColumn'

export default CategoryColumn = ({ title }) => {

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.box}>
                <ProductColumn />
                <ProductColumn />
            </View>
        </View>
    )
}
