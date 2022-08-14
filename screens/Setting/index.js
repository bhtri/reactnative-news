import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles';
import { CategorySetting } from '../../components'

export default SettingScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>Danh mục</Text>
                <CategorySetting />
                <CategorySetting />
                <CategorySetting />
                <CategorySetting />
            </View>
        </View>
    )
}
