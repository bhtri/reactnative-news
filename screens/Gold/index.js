import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import { GridPrice } from '../../components'


export default GoldScreen = (props) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.layout}>
                    <View style={styles.layoutTitle}>
                        <View style={styles.column}>
                            <Text style={styles.layoutTextHeader}>Loại vàng</Text>
                        </View>
                        <View style={styles.column} >
                            <Text style={styles.layoutTextHeader}>Mua vào</Text>
                        </View>
                        <View style={styles.column} >
                            <Text style={styles.layoutTextHeader}>Bán ra</Text>
                        </View>
                    </View>

                    <GridPrice />
                    <GridPrice numberDown />
                    <GridPrice />
                    <GridPrice numberDown />

                </View>


            </View>
        </>
    )
}
