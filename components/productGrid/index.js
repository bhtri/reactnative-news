import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './styles'
import Icon from '../Icon'

export default ProductGrid = ({ data }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.product}>
                <View style={styles.boxImg}>
                    <Image style={styles.img} source={{ uri: data.thumb }} />
                </View>
                <View style={styles.boxContent}>
                    <Text style={styles.title}>{data.title}</Text>
                    <View style={styles.time}>
                        <Icon />
                        <Text style={styles.timeText}>{data.publish_date}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
