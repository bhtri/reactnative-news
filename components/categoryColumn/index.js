import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import ProductColumn from '../productColumn'

export default CategoryColumn = () => {

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Thể Thao</Text>
            </View>
            <View style={styles.box}>
                <ProductColumn />
                <ProductColumn />
            </View>
        </View>
    )
}
