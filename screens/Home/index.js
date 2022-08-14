import React from 'react'
import { View, ScrollView } from 'react-native'

import styles from './styles'
import { CategoryColumn , CategoryGrid } from '../../components'


export default HomeScreen = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <CategoryColumn />
                <CategoryGrid />
            </ScrollView>
        </View>
    )
}
