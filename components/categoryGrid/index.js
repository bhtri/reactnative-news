import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import ProductGrid from '../productGrid'

export default CategoryGrid = () => {

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Bóng Đá</Text>
            </View>
            <View style={styles.box}>
                <View style={styles.boxProduct}>
                    <ProductGrid />
                    <ProductGrid />
                </View>
                <View style={styles.boxProduct}>
                    <ProductGrid />
                    <ProductGrid />
                </View>
            </View>
        </View>
    )
}